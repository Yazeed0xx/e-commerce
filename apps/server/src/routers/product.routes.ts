import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  getBrands,
  updateStock,
} from "@/controller/productController";
import jwtMiddleware from "@/middleware/middleware";

const productRouter = Router();

// Public routes - Anyone can view products
productRouter.get("/", getProducts);
productRouter.get("/categories", getCategories);
productRouter.get("/brands", getBrands);
productRouter.get("/:id", getProductById);

// Protected routes - Require authentication (admin only)
productRouter.post("/", jwtMiddleware, createProduct);
productRouter.put("/:id", jwtMiddleware, updateProduct);
productRouter.delete("/:id", jwtMiddleware, deleteProduct);
productRouter.patch("/:id/stock", jwtMiddleware, updateStock);

export default productRouter;
