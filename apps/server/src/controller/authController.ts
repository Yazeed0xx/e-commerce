import type { Request, Response } from "express";
import { z } from "zod";
import { db } from "@/db";
import bcrypt from "bcrypt";
import { users } from "@/db";
import { eq } from "drizzle-orm";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  verifyAccessToken,
} from "@/utils/jwt";
import dotenv from "dotenv";
dotenv.config();
const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3).max(20),
});

export const signup = async (req: Request, res: Response): Promise<void> => {
  const parseData = authSchema.safeParse(req.body);

  if (!parseData.success) {
    res.status(400).json({
      message: "Invalid data",
      errors: parseData.error.errors,
    });
    return;
  }

  const { email, password, username } = parseData.data;

  try {
    // Check if user already exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    // Hash password and create user
    const hashPassword = await bcrypt.hash(password, 12);
    const insertResult = await db.insert(users).values({
      name: username,
      email: email,
      password: hashPassword,
    });

    // Get the created user
    const [newUser] = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
      })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    // Generate tokens

    res.status(201).json({
      message: "User created successfully",
      data: {
        user: {
          id: newUser.id,
          username: newUser.name,
          email: newUser.email,
        },
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const parseData = authSchema
    .pick({ email: true, password: true })
    .safeParse(req.body);

  if (!parseData.success) {
    res.status(400).json({
      message: "Invalid data",
      errors: parseData.error.errors,
    });
    return;
  }

  const { email, password } = parseData.data;

  try {
    // Find user by email
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      res.status(401).json({
        message: "Invalid email or password",
      });
      return;
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({
        message: "Invalid email or password",
      });
      return;
    }

    // Generate tokens
    const payload = { userId: user.id, email: user.email };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    res.status(200).json({
      message: "Login successful",
      data: {
        user: {
          id: user.id,
          username: user.name,
          email: user.email,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(401).json({
      message: "Refresh token is required",
    });
    return;
  }

  try {
    // Verify refresh token
    const decoded = verifyRefreshToken(refreshToken) as {
      userId: number;
      email: string;
    };

    // Get user from database to ensure they still exist
    const [user] = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
      })
      .from(users)
      .where(eq(users.id, decoded.userId))
      .limit(1);

    if (!user) {
      res.status(401).json({
        message: "Invalid refresh token",
      });
      return;
    }

    // Generate new tokens
    const payload = { userId: user.id, email: user.email };
    const newAccessToken = signAccessToken(payload);
    const newRefreshToken = signRefreshToken(payload);

    res.status(200).json({
      message: "Tokens refreshed successfully",
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    });
  } catch (error) {
    console.error("Error refreshing token:", error);
    res.status(401).json({
      message: "Invalid refresh token",
    });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      res.status(401).json({
        message: "Authorization header is missing or invalid format",
      });
      return;
    }

    const token = authorizationHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "Token is missing",
      });
      return;
    }

    // Verify the token is valid before logout
    const decoded = verifyAccessToken(token) as {
      userId: number;
      email: string;
    };

    // Optional: In a production app, you would add the token to a blacklist
    // For now, we'll just validate the token and send success response

    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.userId;

    const [user] = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
      })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      message: "Profile retrieved successfully",
      data: {
        user: {
          id: user.id,
          username: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    console.error("Error getting profile:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
