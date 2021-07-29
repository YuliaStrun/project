import { Button, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

import { OrderItem } from 'src/Components/OrderItem/OrderItem';
import { ProductInCart } from 'src/api/interfaces/ProductInCart';
import { useCartStore } from 'src/hooks/useCartStore';

import { useStyles } from './Order.styles';

export const Order: React.FC = observer(() => {
  const classes = useStyles();
  const { cartStore } = useCartStore();

  useEffect(() => {
    cartStore.getCart(0, cartStore.counter);
  }, []);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Ordering</h2>
      <form className={classes.form}>
        <TextField className={classes.field} id="phone-number" label="Phone number" variant="outlined" />
        <TextField className={classes.field} id="address" label="Address" variant="outlined" />
        <TextField className={classes.field} id="name" label="Name" variant="outlined" />
        <TextField className={classes.field} id="e-mail" label="E-mail" variant="outlined" />
        <TextField
          className={classes.field}
          multiline={true}
          rows={5}
          id="comment"
          label="Comment"
          variant="outlined"
        />
        <div className={classes.orderCount}>
          <h3>
            Subtotal ({cartStore?.cart?.count} items): {cartStore?.cart?.fullPrice}&#8381;
          </h3>
          <Button className={classes.purchaseButton} type="submit">
            Order
          </Button>
        </div>
      </form>
      <div className={classes.itemsTable}>
        <div className={classes.itemsTableHeader}>
          <div className={classes.itemsTotalCount}>{cartStore?.cart?.count} items</div>
          <div className={classes.columnNames}>
            <div className={classes.itemsProperty}>Quantity</div>
            <div className={classes.itemsProperty}>Price</div>
          </div>
        </div>
        <div className={classes.itemsTableBody}>
          {cartStore?.cart?.products.map((currentProduct: ProductInCart) => (
            <OrderItem
              key={`${currentProduct.product.id} ${currentProduct.productProperty.size}`}
              product={currentProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
