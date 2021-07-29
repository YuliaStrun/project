import React from 'react';

import { Header } from 'src/Components/Header/Header';
import { MainHeader } from 'src/Components/MainHeader/MainHeader';

import { useStyles } from './StaticRoute.styles';

export const StaticRoute = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <MainHeader />
    </div>
  );
};
