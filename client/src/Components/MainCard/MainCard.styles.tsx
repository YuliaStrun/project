import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    margin: '5px',
  },
  shoppingCartIcon: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
  },
  price: {
    fontSize: 'medium',
    fontWeight: 'bold',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
