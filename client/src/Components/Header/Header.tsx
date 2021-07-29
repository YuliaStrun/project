import React from 'react';
import { AppBar, Button } from '@material-ui/core';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';

import { useStyles } from './Header.styles';

export const Header = (): JSX.Element => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <div className={classes.infoBlock}>
        <Button className={classes.buttons}>
          <CreditCardRoundedIcon fontSize="small" />
          Convenient payment
        </Button>
        <Button className={classes.buttons}>
          <AirportShuttleOutlinedIcon fontSize="small" />
          Company
        </Button>
      </div>
    </AppBar>
  );
};
