"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid3X3, List, SlidersHorizontal, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { ViewMode, SortOption } from "@/types/product";

interface ControlsBarProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectedCategories: string[];
  selectedBrands: string[];
  onCategoryRemove: (category: string) => void;
  onBrandRemove: (brand: string) => void;
  FilterContent: React.ComponentType;
}

export const ControlsBar: React.FC<ControlsBarProps> = ({
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  selectedCategories,
  selectedBrands,
  onCategoryRemove,
  onBrandRemove,
  FilterContent,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
      <div className="flex items-center gap-4">
        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="lg:hidden">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 ">
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="flex items-center gap-1 pr-1"
            >
              <span>{category}</span>
              <button
                type="button"
                className="ml-1 h-4 w-4 flex items-center justify-center rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("Category remove clicked:", category);
                  onCategoryRemove(category);
                }}
                aria-label={`Remove ${category} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedBrands.map((brand) => (
            <Badge
              key={brand}
              variant="secondary"
              className="flex items-center gap-1 pr-1"
            >
              <span>{brand}</span>
              <button
                type="button"
                className="ml-1 h-4 w-4 flex items-center justify-center rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("Brand remove clicked:", brand);
                  onBrandRemove(brand);
                }}
                aria-label={`Remove ${brand} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Sort */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>

        {/* View Mode */}
        <div className="flex border rounded-md">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
