import { ProductInCart } from './ProductInCart';

export interface CartData {
  count: number;
  products: ProductInCart[];
  fullPrice: number;
}
