export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: string; // Decimal comes back as string from MySQL
  originalPrice: string | null;
  image: string;
  images?: string[];
  rating: string; // Decimal comes back as string from MySQL
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
  variants?: {
    name: string;
    price: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductRequest {
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating?: number;
  reviews?: number;
  badge?: string;
  inStock?: boolean;
  stockCount?: number;
  description: string;
  features?: string[];
  specifications?: Record<string, string>;
  colors?: {
    name: string;
    value: string;
    available: boolean;
  }[];
  variants?: {
    name: string;
    price: number;
  }[];
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {
  id: number;
}

export interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  rating?: number;
  search?: string;
}

export interface ProductResponse {
  message: string;
  data: Product | Product[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
