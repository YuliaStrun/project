import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    itemCard: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid gray',
      paddingBottom: '15px',
    },
    itemInfo: {
      display: 'flex',
      paddingLeft: '15px',
    },
    itemImageContainer: {
      display: 'flex',
      width: '80px',
      marginRight: '15px',
    },
    itemImage: {
      width: '100%',
      objectFit: 'scale-down',
    },
    itemDetails: {
      width: '300px',
    },
    itemQuantityAndPrice: {
      marginTop: '15px',
      display: 'flex',
      width: '300px',
      justifyContent: 'space-between',
      paddingRight: '15px',
      boxSizing: 'border-box',
    },
  }),
);
