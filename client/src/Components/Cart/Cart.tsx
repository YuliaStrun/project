import React, { useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { useCartStore } from 'src/hooks/useCartStore';
import { CartItem } from 'src/Components/CartItem/CartItem';
import { ProductInCart } from 'src/api/interfaces/ProductInCart';

import { useStyles } from './Cart.styles';

const MOCKED_PRODUCT_COUNT = 9;

export const Cart = observer((): JSX.Element => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const СartStore = useCartStore();

  useEffect(() => {
    СartStore.getNewCartData((currentPage - 1) * MOCKED_PRODUCT_COUNT, MOCKED_PRODUCT_COUNT);
  }, []);

  const onRemove = (id: number, productId: number, size: string) => {
    СartStore.deleteProductFromCart(productId, size);
  };
  const onUpdate = (id: number, productId: number, size: string, newNumberOfProducts: number) => {
    if (newNumberOfProducts === 0) {
      onRemove(id, productId, size);
    } else {
      СartStore.updateProductFromCart(productId, size, newNumberOfProducts);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.cart}>
        <div className={classes.pagination}>
          {СartStore.cart?.products.map((currentProduct: ProductInCart) => (
            <CartItem
              key={`${currentProduct.productProperty.size} ${currentProduct.product.id}`}
              product={currentProduct}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          ))}
          <Pagination
            count={Math.ceil((СartStore?.cart?.count ?? 1) / MOCKED_PRODUCT_COUNT)}
            page={currentPage}
            onChange={(event, newPage) => {
              setCurrentPage(newPage);
            }}
          />
        </div>
      </div>
      <div className={classes.priceBlock}>
        <div className={classes.fullPrice}>
          <div className={classes.text}>Full Price: {СartStore?.cart?.fullPrice}&#8381;</div>
          <Button className={classes.button}>Checkout</Button>
        </div>
      </div>
    </div>
  );
});
