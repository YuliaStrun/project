import React from 'react';
import { Card, CardContent, CardMedia, IconButton } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

<<<<<<< HEAD
import { ProductInCart } from 'src/api/interfaces/ProductInCart';
=======
import { CartData } from 'src/api/interfaces/CartData';
>>>>>>> f80d257e5a777c346694bca5ca021705bf785b89

import { useStyles } from './CartItem.styles';

interface Props {
  product: ProductInCart;
  onRemove: (id: number, productId: number, size: string) => void;
  onUpdate: (id: number, productId: number, size: string, newNumberOfProducts: number) => void;
}
export const CartItem: React.FC<Props> = ({ product, onRemove, onUpdate }) => {
  const classes = useStyles();
  const item = product.product;
  const handleRemove = (productId: number) => {
    onRemove(1, productId, product.productProperty.size.toString());
  };

  const handleUpdate = (changeCount: number) => {
    onUpdate(1, item.id, product.productProperty.size.toString(), product.productProperty.count + changeCount);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.nameBlock}>
        <CardMedia component="img" src={item.image} classes={{ media: classes.img }} />
        <div className={classes.textBlock}>
          <p className={classes.name}>{item.name}</p>
          <p className={classes.pBlock}>Size: {product.productProperty.size}</p>
          <p className={classes.pBlock}>Color: {item.color}</p>
        </div>
      </div>
      <CardContent className={classes.infoBlock}>
        <div className={classes.priceBlock}>
          <div className={classes.count}>
            <IconButton aria-label="delete" onClick={() => handleUpdate(-1)}>
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            {product.productProperty.count}
            <IconButton aria-label="add" onClick={() => handleUpdate(+1)}>
              <AddCircleOutlineOutlinedIcon fontSize="default" />
            </IconButton>
          </div>
          <p className={classes.price}>{item.price}&#8381;</p>
          <div className={classes.icons}>
            <IconButton aria-label="Delete" onClick={() => handleRemove(item.id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            <IconButton aria-label="AddToFavorite">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
