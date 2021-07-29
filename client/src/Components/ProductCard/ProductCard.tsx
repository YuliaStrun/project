import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Product } from 'src/api/interfaces/Product';
import { getProductById } from 'src/api/products';
import { SizeField } from 'src/Components/SizeField/SizeField';
import { useCartStore } from 'src/hooks/useCartStore';

import { useStyles } from './ProductCard.styles';

interface Props {
  id: string;
}
export const ProductCard: React.FC<RouteComponentProps<Props>> = observer(({ match, location }) => {
  const classes = useStyles();
  const history = useHistory();
  const СartStore = useCartStore();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [size, setSize] = useState('');

  const setNewSize = (newSize: string) => {
    setSize(newSize);
  };

  useEffect(() => {
    const getNewProduct = async () => {
      try {
        const newProduct: Product = await getProductById(Number(match.params.id));
        setProduct(newProduct);
        setSize(newProduct?.productSizes[0]?.size ?? '');
      } catch {
        setIsNotFound(true);
      }
    };
    getNewProduct();
  }, [match.params.id]);

  const handleCartClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    СartStore.putProductToCart(product?.id ?? 0, size);
  };

  const handleFavoriteClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  if (isNotFound) {
    history.push('/notFound', { from: location.pathname });
  }

  if (!product) {
    return (
      <div className={classes.root}>
        <CircularProgress color="secondary" />{' '}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <img src={product?.image ?? ''} className={classes.image} />
        <div className={classes.descriptionBlock}>
          <Rating name="simple-controlled" />
          <div className={classes.name}>{product?.name ?? ''}</div>
          <div className={classes.description}>{product?.description ?? ''}</div>
          <div className={classes.name}>{product?.color ?? ''}</div>
          {}
          <SizeField productsSizes={product?.productSizes ?? []} setNewSize={setNewSize} />
          <div className={classes.cart}>
            <Button
              disabled={product?.productSizes.length === 0}
              variant="contained"
              color="primary"
              onClick={handleCartClick}
            >
              Add to cart
            </Button>
            <Button variant="contained" color="primary" onClick={handleFavoriteClick}>
              <FavoriteBorderOutlinedIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
