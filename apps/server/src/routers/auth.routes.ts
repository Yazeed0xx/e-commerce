import { Router } from "express";
import {
  login,
  signup,
  refreshToken,
  logout,
  getProfile,
} from "@/controller/authController";
import jwtMiddleware from "@/middleware/middleware";

const authRouter = Router();

// Public routes
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/refresh-token", refreshToken);

// Protected routes
authRouter.post("/logout", jwtMiddleware, logout);
authRouter.get("/profile", jwtMiddleware, getProfile);

export default authRouter;
