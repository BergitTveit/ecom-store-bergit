import { Product } from "../../../api/api.types";

export interface ICartItem {
  product: Product;
  quantity: number;
}


export interface CartState {
  items: ICartItem[];
}

export interface UseCartReturn {
  cartItems: ICartItem[];
  total: number;
  handleQuantityChange: (id: string, quantity: number) => void;
  handleRemoveItem: (id: string) => void;
  isLoading?: boolean;
  error?: Error;
}
