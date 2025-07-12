// import type { Request, Response } from "express";
// import { z } from "zod";
// import { db, products } from "@/db";
// import { eq, and, gte, lte, like, desc, asc } from "drizzle-orm";
// import type { CreateProductRequest, ProductFilters } from "@/types/product";

// // Validation schemas
// const createProductSchema = z.object({
//   name: z.string().min(1, "Product name is required"),
//   brand: z.string().min(1, "Brand is required"),
//   category: z.string().min(1, "Category is required"),
//   price: z.number().positive("Price must be positive"),
//   originalPrice: z.number().positive().optional(),
//   image: z.string().url("Valid image URL is required"),
//   images: z.array(z.string().url()).optional(),
//   rating: z.number().min(0).max(5).optional().default(0),
//   reviews: z.number().min(0).optional().default(0),
//   badge: z.string().optional(),
//   inStock: z.boolean().optional().default(true),
//   stockCount: z.number().min(0).optional().default(0),
//   description: z.string().min(1, "Description is required"),
//   features: z.array(z.string()).optional(),
//   specifications: z.record(z.string(), z.string()).optional(),
//   colors: z
//     .array(
//       z.object({
//         name: z.string(),
//         value: z.string(),
//         available: z.boolean(),
//       })
//     )
//     .optional(),
//   variants: z
//     .array(
//       z.object({
//         name: z.string(),
//         price: z.number(),
//       })
//     )
//     .optional(),
// });

// const updateProductSchema = createProductSchema.partial().extend({
//   id: z.number().positive(),
// });

// // Get all products with filtering and pagination
// export const getProducts = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const {
//       page = "1",
//       limit = "10",
//       category,
//       brand,
//       minPrice,
//       maxPrice,
//       inStock,
//       rating,
//       search,
//       sortBy = "id",
//       sortOrder = "desc",
//     } = req.query as any;

//     const pageNum = parseInt(page);
//     const limitNum = parseInt(limit);
//     const offset = (pageNum - 1) * limitNum;

//     // Build filter conditions
//     const conditions = [];

//     if (category) {
//       conditions.push(eq(products.category, category));
//     }

//     if (brand) {
//       conditions.push(eq(products.brand, brand));
//     }

//     if (minPrice) {
//       conditions.push(gte(products.price, minPrice.toString()));
//     }

//     if (maxPrice) {
//       conditions.push(lte(products.price, maxPrice.toString()));
//     }

//     if (inStock !== undefined) {
//       conditions.push(eq(products.inStock, inStock === "true"));
//     }

//     if (rating) {
//       conditions.push(gte(products.rating, rating.toString()));
//     }

//     if (search) {
//       conditions.push(like(products.name, `%${search}%`));
//     }

//     // Build order clause
//     let orderClause;
//     switch (sortBy) {
//       case "name":
//         orderClause =
//           sortOrder === "asc"
//             ? asc(products.name)
//             : desc(products.name);
//         break;
//       case "price":
//         orderClause =
//           sortOrder === "asc"
//             ? asc(products.price)
//             : desc(products.price);
//         break;
//       case "rating":
//         orderClause =
//           sortOrder === "asc"
//             ? asc(products.rating)
//             : desc(products.rating);
//         break;
//       case "createdAt":
//         orderClause =
//           sortOrder === "asc"
//             ? asc(products.createdAt)
//             : desc(products.createdAt);
//         break;
//       default:
//         orderClause =
//           sortOrder === "asc" ? asc(products.id) : desc(products.id);
//     }

//     // Get products with filters
//     const productList = await db
//       .select()
//       .from(products)
//       .where(conditions.length ? and(...conditions) : undefined)
//       .orderBy(orderClause)
//       .limit(limitNum)
//       .offset(offset);

//     // Get total count for pagination
//     const totalResult = await db
//       .select({ count: db.$count(products) })
//       .from(products)
//       .where(conditions.length ? and(...conditions) : undefined);

//     const total = totalResult[0]?.count || 0;
//     const totalPages = Math.ceil(total / limitNum);

//     res.status(200).json({
//       message: "Products retrieved successfully",
//       data: productList,
//       pagination: {
//         page: pageNum,
//         limit: limitNum,
//         total,
//         totalPages,
//       },
//     });
//   } catch (error) {
//     console.error("Error getting products:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// // Get single product by ID
// export const getProductById = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const productId = parseInt(id);

//     if (isNaN(productId)) {
//       res.status(400).json({
//         message: "Invalid product ID",
//       });
//       return;
//     }

//     const [product] = await db
//       .select()
//       .from(products)
//       .where(eq(products.id, productId))
//       .limit(1);

//     if (!product) {
//       res.status(404).json({
//         message: "Product not found",
//       });
//       return;
//     }

//     res.status(200).json({
//       message: "Product retrieved successfully",
//       data: product,
//     });
//   } catch (error) {
//     console.error("Error getting product:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// // Create new product
// export const createProduct = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const parseData = createProductSchema.safeParse(req.body);

//     if (!parseData.success) {
//       res.status(400).json({
//         message: "Invalid product data",
//         errors: parseData.error.errors,
//       });
//       return;
//     }

//     const productData = parseData.data;

//     // Insert product
//     const insertResult = await db.insert(products).values({
//       ...productData,
//       price: productData.price.toString(),
//       originalPrice: productData.originalPrice?.toString() || null,
//       rating: productData.rating.toString(),
//     });

//     // Get the created product
//     const [newProduct] = await db
//       .select()
//       .from(products)
//       .where(eq(products.name, productData.name))
//       .orderBy(desc(products.id))
//       .limit(1);

//     res.status(201).json({
//       message: "Product created successfully",
//       data: newProduct,
//     });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// // Update product
// export const updateProduct = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const productId = parseInt(id);

//     if (isNaN(productId)) {
//       res.status(400).json({
//         message: "Invalid product ID",
//       });
//       return;
//     }

//     const parseData = updateProductSchema.safeParse({
//       ...req.body,
//       id: productId,
//     });

//     if (!parseData.success) {
//       res.status(400).json({
//         message: "Invalid product data",
//         errors: parseData.error.errors,
//       });
//       return;
//     }

//     const { id: _, ...updateData } = parseData.data;

//     // Check if product exists
//     const [existingProduct] = await db
//       .select()
//       .from(products)
//       .where(eq(products.id, productId))
//       .limit(1);

//     if (!existingProduct) {
//       res.status(404).json({
//         message: "Product not found",
//       });
//       return;
//     }

//     // Prepare update data
//     const updatePayload: any = { ...updateData };
//     if (updateData.price) {
//       updatePayload.price = updateData.price.toString();
//     }
//     if (updateData.originalPrice) {
//       updatePayload.originalPrice = updateData.originalPrice.toString();
//     }
//     if (updateData.rating) {
//       updatePayload.rating = updateData.rating.toString();
//     }

//     // Update product
//     await db
//       .update(products)
//       .set(updatePayload)
//       .where(eq(products.id, productId));

//     // Get updated product
//     const [updatedProduct] = await db
//       .select()
//       .from(products)
//       .where(eq(products.id, productId))
//       .limit(1);

//     res.status(200).json({
//       message: "Product updated successfully",
//       data: updatedProduct,
//     });
//   } catch (error) {
//     console.error("Error updating product:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// // Delete product
// export const deleteProduct = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const productId = parseInt(id);

//     if (isNaN(productId)) {
//       res.status(400).json({
//         message: "Invalid product ID",
//       });
//       return;
//     }

//     // Check if product exists
//     const [existingProduct] = await db
//       .select()
//       .from(products)
//       .where(eq(products.id, productId))
//       .limit(1);

//     if (!existingProduct) {
//       res.status(404).json({
//         message: "Product not found",
//       });
//       return;
//     }

//     // Delete product
//     await db.delete(products).where(eq(products.id, productId));

//     res.status(200).json({
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// // Get unique categories
// export const getCategories = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const categories = await db
//       .selectDistinct({ category: products.category })
//       .from(products)
//       .where(eq(products.inStock, true));

//     res.status(200).json({
//       message: "Categories retrieved successfully",
//       data: categories.map((c) => c.category),
//     });
//   } catch (error) {
//     console.error("Error getting categories:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// // Get unique brands
// export const getBrands = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const brands = await db
//       .selectDistinct({ brand: products.brand })
//       .from(products)
//       .where(eq(products.inStock, true));

//     res.status(200).json({
//       message: "Brands retrieved successfully",
//       data: brands.map((b) => b.brand),
//     });
//   } catch (error) {
//     console.error("Error getting brands:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// // Update stock
// export const updateStock = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const { stockCount, inStock } = req.body;
//     const productId = parseInt(id);

//     if (isNaN(productId)) {
//       res.status(400).json({
//         message: "Invalid product ID",
//       });
//       return;
//     }

//     const updateData: any = {};
//     if (typeof stockCount === "number") {
//       updateData.stockCount = stockCount;
//       updateData.inStock = stockCount > 0;
//     }
//     if (typeof inStock === "boolean") {
//       updateData.inStock = inStock;
//     }

//     await db
//       .update(products)
//       .set(updateData)
//       .where(eq(products.id, productId));

//     const [updatedProduct] = await db
//       .select()
//       .from(products)
//       .where(eq(products.id, productId))
//       .limit(1);

//     res.status(200).json({
//       message: "Stock updated successfully",
//       data: updatedProduct,
//     });
//   } catch (error) {
//     console.error("Error updating stock:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };
