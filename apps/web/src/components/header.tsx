"use client";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { CartIcon } from "./CartIcon";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Search, User, Heart, Menu, X, Zap } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/cart", label: "Cart" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TechStore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map(({ to, label }) => (
              <Link key={to} href={to}>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
                >
                  {label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-border focus:border-primary transition-colors duration-200"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Search Icon - Mobile */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex relative"
            >
              <Heart className="h-5 w-5" />
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground"
              >
                2
              </Badge>
            </Button>

            {/* Cart */}
            <CartIcon />

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* User Account */}
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-muted/50 border-border"
                  />
                </div>
              </div>

              {/* Mobile Links */}
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  href={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10"
                  >
                    {label}
                  </Button>
                </Link>
              ))}

              {/* Mobile Account Links */}
              <div className="border-t border-border pt-2 mt-2">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Sign Up
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                  <Badge variant="secondary" className="ml-auto">
                    2
                  </Badge>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
