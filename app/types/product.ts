// Product model for Narla Shop

export interface Product {
  id: string;                 // unique id
  title: string;              // product name
  slug: string;               // url slug: /product/this-is-product
  price: number;              // ₺ price
  image: string;              // main image
  images?: string[];          // optional multiple images for detail page
  colors?: string[];          // hex color list
  sizes?: string[];           // S-M-L-XL etc
  category: string;           // category slug
  isBestseller?: boolean;     // optional flag
  isNew?: boolean;            // optional flag
  denier?: string;            // thickness like "20D", "60D"
  description?: string;       // detail text
  composition?: string;       // material info
  care?: string;
   // 🟣 Eklenen Yeni Alanlar
  colorImages?: Record<string, string[]>;
  isLatest?: boolean;
              // washing instructions
}
