import { Category } from './interfaces/Category';

const categories: Category = {
  color: {
    categoryData: [
      { name: 'blue', isChecked: false },
      { name: 'pink', isChecked: false },
    ],
    isOpen: false,
  },
  type: {
    categoryData: [
      { name: 'dress', isChecked: false },
      { name: 'skirt', isChecked: false },
    ],
    isOpen: false,
  },
};

export const GetCategories = (): Category => categories;
