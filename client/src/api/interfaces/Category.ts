import { CategoryData } from './CategoryData';

export interface Category {
  [key: string]: {
    categoryData: CategoryData[];
    isOpen: boolean;
  };
}
