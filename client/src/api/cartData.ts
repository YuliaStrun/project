import { CartData } from './interfaces/CartData';
import { RawCartData } from './interfaces/RawCartData';
import { getData } from './getData';
import { apiUrl } from './constants';
import { cartAdapter } from './utils/cartAdapters';

export const getProductsFromCart = async (id: number, skip: number, take: number): Promise<CartData> => {
  const params = new URLSearchParams();
  params.set('id', id.toString());
  params.set('skip', skip.toString());
  params.set('take', take.toString());
  const info: RawCartData = await getData<RawCartData>(`${apiUrl}cart?${params}`);
  return cartAdapter(info);
};

export const putProductToCart = async (id: number, productId: number, size: string): Promise<Response> => {
  const requestOptions = {
    method: 'PUT',
  };
  const params = new URLSearchParams();
  params.set('id', id.toString());
  params.set('productId', productId.toString());
  params.set('size', size.toString());
  return await getData(`${apiUrl}cart?${params}`, requestOptions);
};

export const updateProductFromCart = async (
  id: number,
  productId: number,
  size: string,
  newNumberOfProducts: number,
): Promise<Response> => {
  const requestOptions = {
    method: 'PATCH',
  };
  const params = new URLSearchParams();
  params.set('id', id.toString());
  params.set('productId', productId.toString());
  params.set('size', size.toString());
  params.set('newNumberOfProducts', newNumberOfProducts.toString());
  return await getData(`${apiUrl}cart?${params}`, requestOptions);
};

export const deleteProductFromCart = async (id: number, productId: number, size: string): Promise<Response> => {
  const requestOptions = {
    method: 'DELETE',
  };
  const params = new URLSearchParams();
  params.set('id', id.toString());
  params.set('productId', productId.toString());
  params.set('size', size.toString());
  return await getData(`${apiUrl}cart?${params.toString()}`, requestOptions);
};
