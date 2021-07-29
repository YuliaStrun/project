import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getProductsFromCart } from 'src/api/cartData';
import { useCartStore } from 'src/hooks/useCartStore';

import { StaticRoute } from './Components/Routes/StaticRoute/StaticRoute';
import { MainRoute } from './Components/Routes/MainRoute/MainRoute';
import { Order } from './Components/Order/Order';
import { CartRoute } from './Components/Routes/CartRoute/CartRoute';
import { ProductCard } from './Components/ProductCard/ProductCard';
import { NotFound } from './Components/NotFound/NotFound';
import { CartData } from './api/interfaces/CartData';

export const App: React.FC = () => {
  const СartStore = useCartStore();

  useEffect(() => {
    const getNewCart = async () => {
      const newCart: CartData = await getProductsFromCart(1, 0, 0);
      СartStore.changeCart(newCart);
    };
    getNewCart();
  });
  return (
    <>
      <Router>
        <StaticRoute />
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/cart">
            <CartRoute />
          </Route>
          <Route path="/notFound" component={NotFound} />
          <Route path="/product/:id" render={props => <ProductCard {...props} />} />
          <Route path="/">
            <MainRoute />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
