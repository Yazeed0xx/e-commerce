"use client";

import React, { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { allProducts, categories, brands } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/useToast";
import { Toast } from "@/components/ui/toast";
import { useProductFilters } from "@/hooks/useProductFilters";
import { SearchBar } from "@/components/SearchBar";
import { ControlsBar } from "@/components/ControlsBar";
import { FilterContent } from "@/components/FilterContent";
import { ProductCard } from "@/components/ProductCard";
import { NoResults } from "@/components/NoResults";
import type { ViewMode, Product } from "@/types/product";

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const { addToCart } = useCart();
  const { toast, showToast, hideToast } = useToast();

  const {
    filters,
    filteredProducts,
    updateFilter,
    handleCategoryChange,
    handleBrandChange,
    clearFilters,
  } = useProductFilters({ products: allProducts });

  const handleAddToCart = useCallback(
    (product: Product) => {
      addToCart({
        product,
        quantity: 1,
        selectedColor: product.colors?.[0],
        selectedVariant: product.variants?.[0] || {
          name: "Standard",
          price: product.price,
        },
      });
      showToast(`${product.name} added to cart!`, "success");
    },
    [addToCart, showToast]
  );

  const FilterContentComponent = useCallback(
    () => (
      <FilterContent
        priceRange={filters.priceRange}
        onPriceRangeChange={(value) => updateFilter("priceRange", value)}
        categories={categories}
        selectedCategories={filters.selectedCategories}
        onCategoryChange={handleCategoryChange}
        brands={brands}
        selectedBrands={filters.selectedBrands}
        onBrandChange={handleBrandChange}
        selectedRating={filters.selectedRating}
        onRatingChange={(rating) => updateFilter("selectedRating", rating)}
        onClearFilters={clearFilters}
      />
    ),
    [
      filters,
      handleCategoryChange,
      handleBrandChange,
      updateFilter,
      clearFilters,
    ]
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete range of premium audio equipment
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FilterContentComponent />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls Bar */}
            <div className="mb-6 space-y-4">
              {/* Search Bar */}
              <SearchBar
                searchTerm={filters.searchTerm}
                onSearchChange={(value) => updateFilter("searchTerm", value)}
              />

              {/* Controls */}
              <ControlsBar
                sortBy={filters.sortBy}
                onSortChange={(value) => updateFilter("sortBy", value)}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                selectedCategories={filters.selectedCategories}
                selectedBrands={filters.selectedBrands}
                onCategoryRemove={(category) =>
                  handleCategoryChange(category, false)
                }
                onBrandRemove={(brand) => handleBrandChange(brand, false)}
                FilterContent={FilterContentComponent}
              />

              {/* Results Count */}
              <div className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {allProducts.length}{" "}
                products
              </div>
            </div>

            {/* Products Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <NoResults onClearFilters={clearFilters} />
            )}
          </div>
        </div>

        {/* Toast Notification */}
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
      </div>
    </div>
  );
}
