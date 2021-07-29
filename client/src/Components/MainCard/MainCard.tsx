import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import { Product } from 'src/api/interfaces/Product';

import { useStyles } from './MainCard.styles';

interface Props {
  product: Product;
}

export const MainCard: React.FC<Props> = ({ product }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`product/${product.id}`);
  };

  const handleAddToFavorite = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" alt={product.name} height="300" src={product.image} />
        <CardContent className={classes.shoppingCartIcon}>
          <div className={classes.button}>
            <div>
              <div className={classes.price}>{product.price}&#8381;</div>
              {product.name}
            </div>
            <IconButton aria-label="cart" onClick={handleAddToFavorite}>
              <FavoriteBorderOutlinedIcon fontSize="default" />
            </IconButton>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
