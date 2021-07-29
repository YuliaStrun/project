import { CartProduct } from './CartProduct';

export interface RawCartData {
  count: number;
  products: CartProduct[];
  fullPrice: number;
}
