export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  images: ProductImage[];
  tags: string[];
}

export interface ProductImage {
  url: string;
  alt: string;
  isMain: boolean;
}

export type ProductCategory = 
  | 'skincare' 
  | 'makeup' 
  | 'haircare' 
  | 'bodycare' 
  | 'fragrance' 
  | 'tools';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  icon: string;
}

export interface FilterOptions {
  categories: ProductCategory[];
  brands: string[];
  priceRange: {
    min: number;
    max: number;
  };
}
