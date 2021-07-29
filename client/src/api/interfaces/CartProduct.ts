import { CartItemInfo } from './CartItemInfo';
import { Product } from './Product';

export interface CartProduct {
  product: Product;
  productProperties: CartItemInfo[];
}
