import React from 'react';

import { Cards } from 'src/Components/Cards/Cards';

import { useStyles } from './MainRoute.styles';

export const MainRoute = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Cards />
    </div>
  );
};
