"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Toast } from "./ui/toast";
import { Star, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/useToast";

export default function FutreProd() {
  // Get the first 3 products for featured section
  const featuredProducts = allProducts.slice(0, 3);
  const { addToCart } = useCart();
  const { toast, showToast, hideToast } = useToast();

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    // Add product to cart with default selections
    addToCart({
      product,
      quantity: 1,
      selectedColor: product.colors?.[0],
      selectedVariant: product.variants?.[0] || {
        name: "Standard",
        price: product.price,
      },
    });

    // Show success toast
    showToast(`${product.name} added to cart!`, "success");
  };

  const handleQuickAdd = (product: (typeof allProducts)[0]) => {
    handleAddToCart(product);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular audio products, carefully curated for
            exceptional sound quality and design
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card dark:bg-card"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badge */}
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

                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background hover:text-red-500 transition-colors duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    className="bg-background text-foreground hover:bg-secondary transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    onClick={() => handleQuickAdd(product)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Quick Add" : "Out of Stock"}
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <CardContent className="p-6 space-y-4">
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
                  </div>{" "}
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                {/* Product Name */}
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-foreground">
                    ${product.price}
                  </span>
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
                </div>{" "}
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Link href={`/products/${product.id}`}>
                    <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground">
              View All Products
            </Button>
          </Link>
        </div>

        {/* Toast Notification */}
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
      </div>
    </section>
  );
}
