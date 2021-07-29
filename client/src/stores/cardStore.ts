import { action, makeObservable, observable } from 'mobx';

import { getProducts } from 'src/api/products';
import { ProductsData } from 'src/api/interfaces/ProductsData';

export class CardStore {
  public productsData: ProductsData | undefined;
  constructor() {
    this.productsData = undefined;
    makeObservable(this, {
      productsData: observable,
      getProducts: action,
    });
  }

  public getProducts = async (
    skip: number,
    take: number,
    minPrice: number,
    maxPrice: number,
    size: string,
    setIsLoading: (newState: boolean) => void,
  ) => {
    this.productsData = await getProducts(skip, take, minPrice, maxPrice, size);
    setIsLoading(false);
  };
}
