import React from 'react';

import { ProductInCart } from 'src/api/interfaces/ProductInCart';

import { useStyles } from './OrderItem.styles';

interface Props {
  product: ProductInCart;
}

export const OrderItem: React.FC<Props> = ({ product }) => {
  const classes = useStyles();
  const item = product.product;

  return (
    <>
      <div className={classes.itemCard}>
        <div className={classes.itemInfo}>
          <div className={classes.itemImageContainer}>
            <img className={classes.itemImage} src={item.image} />
          </div>
          <div className={classes.itemDetails}>
            <h4>{item.name}</h4>
            <p>Size: {product.productProperty.size}</p>
            <p>Color: {item.color}</p>
          </div>
        </div>
        <div className={classes.itemQuantityAndPrice}>
          <div>{product.productProperty.count}</div>
          {item.price}&#8381;
        </div>
      </div>
    </>
  );
};
