"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Share2,
  Minus,
  Plus,
  Check,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Volume2,
  Battery,
  Bluetooth,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import Link from "next/link";
import { getProductById } from "@/data/products";
import { notFound, useParams } from "next/navigation";

const reviews = [
  {
    id: 1,
    userName: "Alex Thompson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    date: "2024-01-15",
    title: "Exceptional sound quality!",
    content:
      "These headphones exceeded my expectations. The noise cancellation is incredible and the sound quality is studio-grade. Highly recommended for music producers.",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    userName: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    date: "2024-01-10",
    title: "Perfect for long listening sessions",
    content:
      "Comfortable to wear for hours. The battery life is amazing - I can use them for days without charging. Great investment!",
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    userName: "Mike Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    date: "2024-01-08",
    title: "Great value for money",
    content:
      "Solid build quality and excellent features. The only minor issue is the touch controls can be a bit sensitive, but overall very satisfied.",
    helpful: 12,
    verified: false,
  },
];

export default function ProductViewPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const productData = getProductById(productId);

  if (!productData) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    productData.colors?.[0] || null
  );
  const [selectedVariant, setSelectedVariant] = useState(
    productData.variants?.[0] || { name: "Standard", price: productData.price }
  );
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= (productData.stockCount || 1)) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", {
      product: productData,
      color: selectedColor,
      variant: selectedVariant,
      quantity,
    });
    // You would typically show a toast notification here
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // Add to wishlist logic here
  };

  const renderStars = (rating: number, size = "h-4 w-4") => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${size} ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : i < rating
                ? "text-yellow-400 fill-current opacity-50"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const nextImage = () => {
    const images = productData.images || [productData.image];
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = productData.images || [productData.image];
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const productImages = productData.images || [productData.image];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span>/</span>
          <Link
            href="/products?category=Headphones"
            className="hover:text-primary"
          >
            Headphones
          </Link>
          <span>/</span>
          <span className="text-foreground">{productData.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={productData.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === selectedImage
                        ? "bg-primary"
                        : "bg-background/60"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    index === selectedImage ? "border-primary" : "border-border"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${productData.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              {productData.badge && (
                <Badge className="mb-3 bg-orange-500 hover:bg-orange-600">
                  {productData.badge}
                </Badge>
              )}
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {productData.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                by {productData.brand}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                {renderStars(productData.rating, "h-5 w-5")}
                <span className="text-sm text-muted-foreground">
                  {productData.rating} ({productData.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-foreground">
                ${selectedVariant.price}
              </span>
              {productData.originalPrice &&
                productData.originalPrice > selectedVariant.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${productData.originalPrice}
                    </span>
                    <Badge variant="destructive">
                      {Math.round(
                        ((productData.originalPrice - selectedVariant.price) /
                          productData.originalPrice) *
                          100
                      )}
                      % OFF
                    </Badge>
                  </>
                )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {productData.inStock ? (
                <>
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-green-600">
                    In Stock{" "}
                    {productData.stockCount &&
                      `(${productData.stockCount} available)`}
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <span className="text-red-600">Out of Stock</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {productData.description}
            </p>

            {/* Color Selection */}
            {productData.colors && productData.colors.length > 0 && (
              <div className="space-y-3">
                <Label className="text-sm font-semibold">
                  Color: {selectedColor?.name}
                </Label>
                <div className="flex gap-3">
                  {productData.colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor?.name === color.name
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border"
                      } ${
                        !color.available
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:scale-110"
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => color.available && setSelectedColor(color)}
                      disabled={!color.available}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Variant Selection */}
            {productData.variants && productData.variants.length > 0 && (
              <div className="space-y-3">
                <Label className="text-sm font-semibold">Version</Label>
                <Select
                  value={selectedVariant.name}
                  onValueChange={(value) => {
                    const variant = productData.variants?.find(
                      (v) => v.name === value
                    );
                    if (variant) setSelectedVariant(variant);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.variants.map((variant) => (
                      <SelectItem key={variant.name} value={variant.name}>
                        {variant.name} - ${variant.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Quantity</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= (productData.stockCount || 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                onClick={handleAddToCart}
                disabled={!productData.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleAddToWishlist}
                className={isWishlisted ? "text-red-500 border-red-200" : ""}
              >
                <Heart
                  className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
                />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">
              Reviews ({productData.reviews})
            </TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Product Features</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">
                      Key Features
                    </h4>
                    {productData.features && productData.features.length > 0 ? (
                      <ul className="space-y-3">
                        {productData.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">
                        No features available
                      </p>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">
                      Technical Highlights
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Volume2 className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                          Hi-Res Audio Certified
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Battery className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                          48-Hour Battery Life
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Bluetooth className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                          Bluetooth 5.3 Connectivity
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">
                          Quick Charge Technology
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Technical Specifications
                </h3>
                {productData.specifications &&
                Object.keys(productData.specifications).length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(productData.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-3 border-b border-border"
                        >
                          <span className="font-medium text-foreground">
                            {key}
                          </span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    No specifications available
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-8">
              {/* Review Summary */}
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">
                        {productData.rating}
                      </div>
                      {renderStars(productData.rating, "h-6 w-6")}
                      <p className="text-muted-foreground mt-2">
                        Based on {productData.reviews} reviews
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-3">
                          <span className="text-sm w-8">{star}★</span>
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{
                                width: `${
                                  star === 5 ? 80 : star === 4 ? 15 : 3
                                }%`,
                              }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-12">
                            {star === 5 ? "80%" : star === 4 ? "15%" : "3%"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Individual Reviews */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage
                            src={review.avatar}
                            alt={review.userName}
                          />
                          <AvatarFallback>{review.userName[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <h4 className="font-semibold text-foreground">
                                {review.userName}
                              </h4>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            {renderStars(review.rating)}
                            <span className="font-medium text-foreground">
                              {review.title}
                            </span>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {review.content}
                          </p>

                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ThumbsDown className="h-4 w-4 mr-1" />
                              Not Helpful
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Write a Review */}
              <Card>
                <CardHeader>
                  <CardTitle>Write a Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your name" />
                    <Input placeholder="Review title" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Your rating:
                    </span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button
                          key={star}
                          variant="ghost"
                          size="sm"
                          className="p-1"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Textarea
                    placeholder="Share your experience with this product..."
                    rows={4}
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    Submit Review
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="qa" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Questions & Answers</h3>
                <div className="space-y-6">
                  <div className="text-center text-muted-foreground">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No questions yet. Be the first to ask!</p>
                    <Button className="mt-4 bg-primary hover:bg-primary/90">
                      Ask a Question
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Add missing Label component
function Label({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
