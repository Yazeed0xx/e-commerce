import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

export function CartIcon() {
  const { state } = useCart();

  return (
    <Link href="/cart">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {state.totalItems > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {state.totalItems > 99 ? "99+" : state.totalItems}
          </Badge>
        )}
      </Button>
    </Link>
  );
}
