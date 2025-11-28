// Cart model for Narla Shop

export interface CartItem {
  id: string;          // product id
  title: string;
  price: number;
  image: string;
  slug: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
