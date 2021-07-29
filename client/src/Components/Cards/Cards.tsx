import React, { useState, useEffect, useReducer } from 'react';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import { CircularProgress } from '@material-ui/core';

import { useQuery } from 'src/hooks/useQuery';
import { MainCard } from 'src/Components/MainCard/MainCard';
import { Filtering } from 'src/Components/Filtering/Filtering';
import { getProducts } from 'src/api/products';
import { Product } from 'src/api/interfaces/Product';
import { ProductsData } from 'src/api/interfaces/ProductsData';

import { useStyles } from './Cards.styles';
import { reducer, initialState, SetTypes } from './Cards.reducer';

const MOCKED_PRODUCT_COUNT = 9;

export const Cards: React.FC = () => {
  const classes = useStyles();
  const [currentPage, updateCurrentPage] = useQuery('page');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [size, setSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const setNewFilters = (newMinPrice: number, newMaxPrice: number, newSize: string) => {
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
    setSize(newSize);
  };

  useEffect(() => {
    const getNewProducts = async () => {
      setIsLoading(true);
      const newProducts: ProductsData = await getProducts(
        Number(currentPage) * MOCKED_PRODUCT_COUNT,
        MOCKED_PRODUCT_COUNT,
        minPrice,
        maxPrice,
        size,
      );
      dispatch({ type: SetTypes.SET_PRODUCTS, payload: newProducts.productsList });
      const newProductsCount = Math.ceil(newProducts.productsCount / MOCKED_PRODUCT_COUNT);
      dispatch({ type: SetTypes.SET_PRODUCTS_COUNT, payload: newProductsCount });
      setIsLoading(false);
    };
    getNewProducts();
  }, [currentPage, maxPrice, minPrice, size]);

  return (
    <div className={classes.root}>
      <div className={classes.cardsBlock}>
        <Box className={classes.block}>
          <Filtering setNewFilters={setNewFilters} />
          {isLoading && <CircularProgress color="secondary" />}
          {state.products.length === 0 && !isLoading && <> There are no such products </>}
          <div className={classes.cards}>
            {state.products.map((currentValue: Product) => (
              <MainCard key={currentValue.id} product={currentValue} />
            ))}
          </div>
          <>
            <Pagination
              count={state.productsCount}
              page={Number(currentPage)}
              onChange={(event, newPage) => {
                updateCurrentPage(newPage.toString());
              }}
            />
          </>
        </Box>
      </div>
    </div>
  );
};
