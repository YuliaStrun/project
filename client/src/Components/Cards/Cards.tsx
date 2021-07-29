import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import { CircularProgress } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { useQuery } from 'src/hooks/useQuery';
import { MainCard } from 'src/Components/MainCard/MainCard';
import { Filtering } from 'src/Components/Filtering/Filtering';
import { Product } from 'src/api/interfaces/Product';
import { useCardStore } from 'src/hooks/useCardStore';

import { useStyles } from './Cards.styles';

const MOCKED_PRODUCT_COUNT = 9;

interface Filters {
  minPrice: number;
  maxPrice: number;
  size: string;
}

export const Cards: React.FC = observer(() => {
  const classes = useStyles();
  const { cardStore } = useCardStore();
  const [currentPage, updateCurrentPage] = useQuery('page');
  const [filters, setFilters] = useState<Filters>({ minPrice: 0, maxPrice: 0, size: '' });
  const [isLoading, setIsLoading] = useState(false);

  const setNewFilters = (newMinPrice: number, newMaxPrice: number, newSize: string) => {
    setFilters({ minPrice: newMinPrice, maxPrice: newMaxPrice, size: newSize });
  };

  useEffect(() => {
    setIsLoading(true);
    cardStore.getProducts(
      (Number(currentPage) - 1) * MOCKED_PRODUCT_COUNT,
      MOCKED_PRODUCT_COUNT,
      filters.minPrice,
      filters.maxPrice,
      filters.size,
      setIsLoading,
    );
  }, [currentPage, filters]);

  return (
    <div className={classes.root}>
      <div className={classes.cardsBlock}>
        <Box className={classes.block}>
          <Filtering setNewFilters={setNewFilters} />
          {isLoading && <CircularProgress color="secondary" />}
          {cardStore.productsData?.productsList.length === 0 && !isLoading && <> There are no such products </>}
          <div className={classes.cards}>
            {cardStore.productsData?.productsList.map((currentValue: Product) => (
              <MainCard key={currentValue.id} product={currentValue} />
            ))}
          </div>
          <>
            <Pagination
              count={Math.ceil((cardStore.productsData?.productsCount ?? 0) / MOCKED_PRODUCT_COUNT)}
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
});
