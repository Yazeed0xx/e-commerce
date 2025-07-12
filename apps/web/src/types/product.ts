export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number | null;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  badge: string | null;
  inStock: boolean;
  stockCount?: number;
  description: string;
  features?: string[];
  specifications?: Record<string, string>;
  colors?: {
    name: string;
    value: string;
    available: boolean;
  }[];
  variants?: ProductVariant[];
}

export interface ProductVariant {
  name: string;
  price: number;
}

export interface ProductFilters {
  searchTerm: string;
  sortBy: string;
  priceRange: [number, number];
  selectedCategories: string[];
  selectedBrands: string[];
  selectedRating: number | null;
}

export type ViewMode = "grid" | "list";
export type SortOption =
  | "featured"
  | "newest"
  | "price-low"
  | "price-high"
  | "rating";
