import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    fontFamily: 'Roboto Condensed, Montserrat',
    paddingLeft: '15%',
    paddingRight: '15%',
    height: '30px',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  infoBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttons: {
    color: 'white',
    fontSize: '12px',
    paddingLeft: '20px',
  },
});
