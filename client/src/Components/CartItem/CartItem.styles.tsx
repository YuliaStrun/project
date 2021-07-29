import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: '150px',
    width: '100%',
    margin: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    '&:hover': {
      boxShadow: '0px 0px 18px 4px rgba(0,0,0,0.23)',
      '& button': {
        visibility: 'visible',
      },
    },
    '& button': {
      visibility: 'hidden',
    },
  },
  infoBlock: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  img: {
    height: '120px',
    width: '100px',
    margin: '10px',
    marginRight: '20px',
  },
  nameBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontSize: '20px',
  },
  count: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
  },
  textBlock: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  priceBlock: {
    height: '100%',
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  pBlock: {
    minWidth: '80px',
    margin: '0px',
    fontSize: '14px',
  },
  price: {
    width: '100%',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
  },
});
