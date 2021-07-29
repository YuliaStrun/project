import { ProductInCart } from 'src/api/interfaces/ProductInCart';
import { RawCartData } from 'src/api/interfaces/RawCartData';
import { CartData } from 'src/api/interfaces/CartData';
import { CartProduct } from 'src/api/interfaces/CartProduct';

export const cartAdapter = (info: RawCartData) => {
  const arr: ProductInCart[] = [];
  info.products.map((currentProduct: CartProduct) => {
    for (const currentValue of currentProduct.productProperties) {
      arr.push({ product: currentProduct.product, productProperty: currentValue });
    }
  });
  const cartData: CartData = { count: info.count, products: arr, fullPrice: info.fullPrice };
  return cartData;
};
