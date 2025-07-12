import "dotenv/config";
import cors from "cors";
import express from "express";
import authRouter from "./routers/auth.routes";
import productRouter from "./routers/product.routes";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "",
  })
);

app.use(express.json());
app.use("/auth", authRouter);
app.use("/products", productRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
