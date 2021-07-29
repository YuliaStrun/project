import { CartItemInfo } from './CartItemInfo';
import { Product } from './Product';

export interface ProductInCart {
  product: Product;
  productProperty: CartItemInfo;
}
