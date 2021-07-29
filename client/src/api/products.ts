import { Product } from './interfaces/Product';
import { ProductsData } from './interfaces/ProductsData';
import { getData } from './getData';
import { apiUrl } from './constants';

export const getProducts = async (
  skip?: number,
  take?: number,
  minPrice?: number,
  maxPrice?: number,
  size?: string,
): Promise<ProductsData> => {
  const url = new URL(`${apiUrl}Products?`);
  const params = new URLSearchParams(url.search.slice(1));
  if (skip) {
    params.append('skip', skip.toString());
  }
  if (take) {
    params.append('take', take.toString());
  }
  if (minPrice) {
    params.append('minPrice', minPrice.toString());
  }
  if (maxPrice) {
    params.append('maxPrice', maxPrice.toString());
  }
  if (Number(size) && size) {
    params.append('size', size);
  }
  const info: ProductsData = await getData<ProductsData>(`${apiUrl}Products?${params}`);
  return info;
};

export const getProductById = async (id: number): Promise<Product> => {
  const product: Product = await getData<Product>(`${apiUrl}products/${id}`);
  return product;
};
