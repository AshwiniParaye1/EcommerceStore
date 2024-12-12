export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartResponse {
  cart: CartItem[];
  total: number;
  message?: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  message: string;
}
