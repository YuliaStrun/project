import { action, makeObservable, observable } from 'mobx';

import { deleteProductFromCart, getProductsFromCart, putProductToCart, updateProductFromCart } from 'src/api/cartData';
import { CartData } from 'src/api/interfaces/CartData';

export class CartStore {
  private initialCount = 0;
  public cart: CartData | undefined;
  constructor() {
    this.cart = undefined;
    makeObservable(this, {
      cart: observable,
      changeCart: action,
      putProductToCart: action,
      updateProductFromCart: action,
      deleteProductFromCart: action,
    });
  }

  private fetchProducts = async (skip: number, take: number) => {
    const newCart: CartData = await getProductsFromCart(1, skip, take);
    this.changeCart(newCart);
  };

  public changeCart = (x: CartData) => {
    this.cart = x;
  };

  public getNewCartData = (skip: number, take: number) => {
    this.fetchProducts(skip, take);
  };

  public putProductToCart = async (id: number, size: string) => {
    await putProductToCart(1, id, size);
    this.getNewCartData(0, (this.cart?.count ?? 0) + 1);
  };

  public updateProductFromCart = async (id: number, size: string, newNumberOfProducts: number) => {
    await updateProductFromCart(1, id, size, newNumberOfProducts);
    this.getNewCartData(0, (this.cart?.count ?? 0) + 1);
  };

  public deleteProductFromCart = async (id: number, size: string) => {
    await deleteProductFromCart(1, id, size);
    this.getNewCartData(0, this.cart?.count ?? 0);
  };
}
