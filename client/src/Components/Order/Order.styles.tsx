import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
    },
    form: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '20px',
      paddingRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      width: '800px',
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    field: {
      width: '100%',
      marginLeft: 0,
    },
    orderCount: {
      width: '100%',
      backgroundColor: 'lightgray',
      minHeight: '100px',
      marginLeft: 0,
      borderRadius: '5px',
      padding: '15px',
      boxSizing: 'border-box',
    },
    purchaseButton: {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'flex-start',
      fontFamily: 'Arial, Verdana, sans-serif',
      '&:hover': {
        backgroundColor: '#49494a',
      },
    },
    itemsTable: {
      width: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '20px',
      paddingRight: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    itemsTableHeader: {
      padding: '15px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid gray',
    },
    itemsTotalCount: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    columnNames: {
      display: 'flex',
      width: '300px',
      justifyContent: 'space-between',
    },
    itemsProperty: {
      color: 'gray',
    },
    itemsTableBody: {
      boxSizing: 'border-box',
    },
  }),
);
