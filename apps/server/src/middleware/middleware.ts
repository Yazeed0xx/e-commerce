import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "@/utils/jwt";

export default function jwtMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
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

  try {
    const decoded = verifyAccessToken(token);
    (req as any).user = decoded; // Attach user info to request object
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({
      message: "Invalid or expired token",
    });
    return;
  }
}
