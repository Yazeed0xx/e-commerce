'use client';
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import type { Product, ViewMode } from "@/types/product";

interface ProductCardProps {
  product: Product;
  viewMode: ViewMode;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode,
  onAddToCart,
}) => {
  return (
    <Card
      className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
        viewMode === "list" ? "flex flex-row" : ""
      }`}
    >
      {/* Product Image */}
      <div
        className={`relative overflow-hidden ${
          viewMode === "list" ? "w-48 flex-shrink-0" : ""
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
            viewMode === "list" ? "w-full h-full" : "w-full h-64"
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <Badge
            className={`absolute top-4 left-4 ${
              product.badge === "Best Seller"
                ? "bg-orange-500 hover:bg-orange-600"
                : product.badge === "New"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-purple-500 hover:bg-purple-600"
            } text-white`}
          >
            {product.badge}
          </Badge>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white hover:text-red-500 transition-colors duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Action Overlay */}
        {product.inStock && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              className="bg-white text-black hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-transform duration-300"
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <CardContent
        className={`p-6 space-y-4 ${viewMode === "list" ? "flex-1" : ""}`}
      >
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Product Name & Brand */}
        <div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
              <Badge variant="destructive" className="text-xs">
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                % OFF
              </Badge>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className={`flex gap-3 pt-2 ${
            viewMode === "list" ? "justify-start" : ""
          }`}
        >
          <Button
            className={`${
              viewMode === "list" ? "w-32" : "flex-1"
            } bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground`}
            disabled={!product.inStock}
            onClick={() => onAddToCart(product)}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
          <Link href={`/products/${product.id}`}>
            <Button variant="outline" className="px-6">
              View
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
