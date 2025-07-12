"use client";
import { useState, useMemo, useCallback } from "react";
import type { Product, ProductFilters } from "@/types/product";

interface UseProductFiltersProps {
  products: Product[];
}

export const useProductFilters = ({ products }: UseProductFiltersProps) => {
  const [filters, setFilters] = useState<ProductFilters>({
    searchTerm: "",
    sortBy: "featured",
    priceRange: [0, 1000],
    selectedCategories: [],
    selectedBrands: [],
    selectedRating: null,
  });

  const updateFilter = useCallback(
    <K extends keyof ProductFilters>(key: K, value: ProductFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleCategoryChange = useCallback(
    (category: string, checked: boolean) => {
      console.log("handleCategoryChange called:", category, checked); // Debug log
      setFilters((prev) => ({
        ...prev,
        selectedCategories: checked
          ? [...prev.selectedCategories, category]
          : prev.selectedCategories.filter((c) => c !== category),
      }));
    },
    []
  );

  const handleBrandChange = useCallback((brand: string, checked: boolean) => {
    console.log("handleBrandChange called:", brand, checked); // Debug log
    setFilters((prev) => ({
      ...prev,
      selectedBrands: checked
        ? [...prev.selectedBrands, brand]
        : prev.selectedBrands.filter((b) => b !== brand),
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      searchTerm: "",
      sortBy: "featured",
      priceRange: [0, 1000],
      selectedCategories: [],
      selectedBrands: [],
      selectedRating: null,
    });
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.brand
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      const matchesCategory =
        filters.selectedCategories.length === 0 ||
        filters.selectedCategories.includes(product.category);

      const matchesBrand =
        filters.selectedBrands.length === 0 ||
        filters.selectedBrands.includes(product.brand);

      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      const matchesRating =
        filters.selectedRating === null ||
        product.rating > filters.selectedRating;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesRating
      );
    });

    // Sort logic
    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [products, filters]);

  return {
    filters,
    filteredProducts,
    updateFilter,
    handleCategoryChange,
    handleBrandChange,
    clearFilters,
  };
};
