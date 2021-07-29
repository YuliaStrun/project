import { Product } from 'src/api/interfaces/Product';

interface State {
  products: Product[];
  productsCount: number;
}

export enum SetTypes {
  SET_PRODUCTS = 'setProducts',
  SET_PRODUCTS_COUNT = 'setProductsCount',
}

type SetCards =
  | {
      type: SetTypes.SET_PRODUCTS;
      payload: Product[];
    }
  | {
      type: SetTypes.SET_PRODUCTS_COUNT;
      payload: number;
    };

export const reducer = (state: State, action: SetCards): State => {
  switch (action.type) {
    case SetTypes.SET_PRODUCTS:
      return { products: action.payload, productsCount: state.productsCount };
    case SetTypes.SET_PRODUCTS_COUNT:
      return { products: state.products, productsCount: action.payload };
    default:
      throw new Error();
  }
};
export const initialState = { products: [], productsCount: 0 };
