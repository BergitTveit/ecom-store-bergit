import { Product } from '../api/api.types';

export interface ICartItem {
  product: Product;
  quantity: number;
}
// use extend instead? 

export interface CartState {
  items: ICartItem[];
}
