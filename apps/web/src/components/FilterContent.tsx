"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

interface FilterContentProps {
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
  brands: string[];
  selectedBrands: string[];
  onBrandChange: (brand: string, checked: boolean) => void;
  selectedRating: number | null;
  onRatingChange: (rating: number | null) => void;
  onClearFilters: () => void;
}

export const FilterContent: React.FC<FilterContentProps> = ({
  priceRange,
  onPriceRangeChange,
  categories,
  selectedCategories,
  onCategoryChange,
  brands,
  selectedBrands,
  onBrandChange,
  selectedRating,
  onRatingChange,
  onClearFilters,
}) => {
  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Price Range</Label>
        <Slider
          value={priceRange}
          onValueChange={onPriceRangeChange}
          max={1000}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Categories</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) =>
                  onCategoryChange(category, checked as boolean)
                }
              />
              <Label htmlFor={category} className="text-sm">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Brands</Label>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) =>
                  onBrandChange(brand, checked as boolean)
                }
              />
              <Label htmlFor={brand} className="text-sm">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Rating */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Minimum Rating</Label>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRating === rating}
                onCheckedChange={(checked) =>
                  onRatingChange(checked ? rating : null)
                }
              />
              <Label
                htmlFor={`rating-${rating}`}
                className="flex items-center text-sm"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-1">& up</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <Button onClick={onClearFilters} variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  );
};
