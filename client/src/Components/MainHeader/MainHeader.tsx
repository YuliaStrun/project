import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useCartStore } from 'src/hooks/useCartStore';

import { useStyles, StyledBadge } from './MainHeader.styles';

export const MainHeader = observer((): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const СartStore = useCartStore();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addToCart = () => {
    history.push(`/cart`);
  };

  const addToAdmin = () => {
    history.push(`/admin`);
  };

  const homeClick = () => {
    history.push(`/`);
  };

  return (
    <>
      <div className={classes.root}>
        <Button className={classes.adminPage} onClick={addToAdmin}>
          Admin
        </Button>
        <div className={classes.logoText}>
          <Button onClick={homeClick}>Store</Button>
        </div>
        <Box className={classes.left} />
        <Box className={classes.right}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            size="small"
            onClick={handleClick}
            className={classes.rightElements}
          >
            Log in
          </Button>
          <IconButton aria-label="cart" className={classes.rightElements} onClick={addToCart}>
            <StyledBadge badgeContent={СartStore?.cart?.count ?? 0} color="secondary" className={classes.badgeIcon}>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </StyledBadge>
          </IconButton>
        </Box>
      </div>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} classes={{ root: classes.text }}>
          Log in
        </MenuItem>
        <MenuItem onClick={handleClose} classes={{ root: classes.text }}>
          {' '}
          Sing up
        </MenuItem>
      </Menu>
    </>
  );
});
