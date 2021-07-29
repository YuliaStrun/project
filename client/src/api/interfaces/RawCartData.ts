<<<<<<< HEAD
import { CartProduct } from './CartProduct';

<<<<<<<< HEAD:client/src/api/interfaces/RawCartData.ts
export interface RawCartData {
========
export interface CartItem {
>>>>>>>> f80d257e5a777c346694bca5ca021705bf785b89:client/src/api/interfaces/CartItem.ts
  count: number;
  products: CartProduct[];
=======
import { CartData } from './CartData';

export interface RawCartData {
  count: number;
  products: CartData[];
>>>>>>> f80d257e5a777c346694bca5ca021705bf785b89
  fullPrice: number;
}
