"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  CreditCard,
  Truck,
  Shield,
  ArrowRight,
  ArrowLeft,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/useToast";
import { Toast } from "@/components/ui/toast";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const { hideToast, showToast, toast } = useToast();

  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateItemQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      showToast("Cannot decrease quantity below 1", "error");
      return;
    }
    const previousQuantity =
      state.items.find((item) => item.product.id === productId)?.quantity || 0;
    updateQuantity(productId, newQuantity);

    if (newQuantity > previousQuantity) {
      showToast("Quantity increased", "success");
    } else {
      showToast("Quantity decreased", "info");
    }
  };

  const removeItem = (productId: number) => {
    removeFromCart(productId);
    showToast("Item removed from cart", "error");
  };

  const applyPromoCode = () => {
    if (isPromoApplied) {
      showToast("Promo code already applied", "info");
      return;
    }
    if (promoCode.toLowerCase() === "save20") {
      setIsPromoApplied(true);
      showToast("Promo code applied! 20% discount activated", "success");
    } else if (promoCode.trim() === "") {
      showToast("Please enter a promo code", "error");
    } else {
      showToast("Invalid promo code. Try 'SAVE20'", "error");
    }
  };

  const handleClearCart = () => {
    if (state.items.length === 0) {
      showToast("Cart is already empty", "info");
      return;
    }
    clearCart();
    showToast("Cart cleared successfully", "success");
  };

  const handleCheckout = () => {
    if (state.items.length === 0) {
      showToast("Your cart is empty", "error");
      return;
    }
    showToast("Redirecting to checkout...", "success");
    // Here you would typically redirect to a checkout page
    setTimeout(() => {
      showToast("Checkout functionality coming soon!", "info");
    }, 1500);
  };

  const addRecommendedToCart = (item: {
    name: string;
    price: number;
    image: string;
  }) => {
    showToast(`${item.name} added to cart!`, "success");
    // Here you would add the actual product to cart
    // For now, just show the toast since these are placeholder items
  };

  const subtotal = state.items.reduce(
    (sum, item) =>
      sum + (item.selectedVariant?.price || item.product.price) * item.quantity,
    0
  );
  const discount = isPromoApplied ? subtotal * 0.2 : 0;
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Shopping Cart
              </h1>
              <p className="text-muted-foreground mt-2">
                {state.items.length}{" "}
                {state.items.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <div className="flex items-center gap-3">
              {state.items.length > 0 && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-destructive hover:text-destructive border-destructive hover:bg-destructive/10"
                  onClick={handleClearCart}
                >
                  <Trash2 className="h-4 w-4" />
                  Clear Cart
                </Button>
              )}
              <Link
                href="/products"
                className="text-muted-foreground hover:text-foreground"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.length === 0 ? (
                <Card className="p-12 text-center">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Start Shopping
                  </Button>
                </Card>
              ) : (
                state.items.map((item) => (
                  <Card key={item.product.id} className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.product.brand}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.product.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                          {item.selectedColor && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                Color:
                              </span>
                              <span className="text-sm font-medium">
                                {item.selectedColor.name}
                              </span>
                            </div>
                          )}
                          {item.selectedVariant && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                Variant:
                              </span>
                              <span className="text-sm font-medium">
                                {item.selectedVariant.name}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateItemQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateItemQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              {item.product.originalPrice &&
                                item.product.originalPrice >
                                  (item.selectedVariant?.price ||
                                    item.product.price) && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${item.product.originalPrice}
                                  </span>
                                )}
                              <span className="text-lg font-bold text-foreground">
                                $
                                {item.selectedVariant?.price ||
                                  item.product.price}
                              </span>
                            </div>
                            {!item.product.inStock && (
                              <Badge variant="secondary" className="mt-1">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}

              {/* Recommended Items */}
              {state.items.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    You might also like
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: "USB-C Cable",
                        price: 19,
                        image:
                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop",
                      },
                      {
                        name: "Phone Case",
                        price: 29,
                        image:
                          "https://images.unsplash.com/photo-1601593346740-925612772716?w=150&h=150&fit=crop",
                      },
                      {
                        name: "Screen Protector",
                        price: 15,
                        image:
                          "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=150&h=150&fit=crop",
                      },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-full h-20 bg-muted rounded-lg mb-2 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          {item.name}
                        </p>
                        <p className="text-sm text-primary font-bold">
                          ${item.price}
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-2 text-xs"
                          onClick={() => addRecommendedToCart(item)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Promo Code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={applyPromoCode} variant="outline">
                      Apply
                    </Button>
                  </div>
                  {isPromoApplied && (
                    <div className="text-sm text-primary font-medium">
                      ✓ 20% discount applied!
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="font-medium text-primary">
                        -${discount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleCheckout}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>

                  {/* Trust Badges */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Secure payment with SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>Free shipping on orders over $100</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Heart className="h-4 w-4 text-primary" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}
