import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  CreditCard,
  Shield,
  Truck,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: "Headphones", href: "#" },
      { name: "Earbuds", href: "#" },
      { name: "Speakers", href: "#" },
      { name: "Accessories", href: "#" },
      { name: "Sale", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Warranty", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Reviews", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const features = [
    { icon: Truck, text: "Free Shipping" },
    { icon: Shield, text: "2 Year Warranty" },
    { icon: CreditCard, text: "Secure Payment" },
  ];

  return (
    <footer className="bg-card text-foreground border-t border-border">
      {/* Features Banner */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechStore
              </h3>
              <p className="text-muted-foreground mt-2 max-w-sm">
                Premium audio equipment for music lovers, creators, and
                professionals. Experience sound like never before.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Get the latest news and exclusive offers
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Shop Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Shop</h4>
              <ul className="space-y-2">
                {footerLinks.shop.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <Separator className="my-8 bg-border" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Visit Our Store
              </p>
              <p className="text-xs text-muted-foreground">
                123 Audio Street, Sound City, SC 12345
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Call Us</p>
              <p className="text-xs text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Email Support
              </p>
              <p className="text-xs text-muted-foreground">
                support@techstore.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 TechStore. All rights reserved.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">Made with</span>
                <Heart className="h-3 w-3 text-red-500 fill-current" />
                <span className="text-xs text-muted-foreground">
                  for music lovers
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="text-xs border-border text-muted-foreground"
              >
                Trusted by 50,000+ customers
              </Badge>
              <div className="flex gap-2">
                {/* Payment methods */}
                <div className="w-8 h-5 bg-primary rounded text-xs flex items-center justify-center font-bold text-primary-foreground">
                  V
                </div>
                <div className="w-8 h-5 bg-accent rounded text-xs flex items-center justify-center font-bold text-accent-foreground">
                  M
                </div>
                <div className="w-8 h-5 bg-secondary rounded text-xs flex items-center justify-center font-bold text-secondary-foreground">
                  P
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
