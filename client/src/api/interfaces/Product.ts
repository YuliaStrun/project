import { Sizes } from './Sizes';

export interface Product {
  productSizes: Sizes[];
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  color: string;
}
