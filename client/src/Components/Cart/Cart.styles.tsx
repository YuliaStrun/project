import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px',
  },
  cart: {
    width: '70%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  pagination: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  priceBlock: {
    width: '30%',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  fullPrice: {
    width: '200px',
    height: '100px',
    border: '2px solid #000000',
    borderRadius: '4px',
  },
  text: {
    fontSize: 'large',
    margin: '10px',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: '100px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: 'Arial, Verdana, sans-serif',
    '&:hover': {
      backgroundColor: '#49494a',
    },
  },
});
