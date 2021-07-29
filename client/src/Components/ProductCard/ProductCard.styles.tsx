import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    marginTop: '80px',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '400px',
    height: 'auto',
  },
  descriptionBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '250px',
    minHeight: '400px',
    justifyContent: 'space-evenly',
    marginLeft: '24px',
  },
  name: {
    fontSize: 'large',
  },
  description: {
    fontSize: 'small',
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
