import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'auto',
  },
  cardsBlock: {
    height: '100%',
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
  },
  block: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: '70px',
    justifyContent: 'space-between',
    minHeight: '80vh',
    minWidth: '45vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
  },
  filtering: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textField: {
    '& > *': {
      width: '80px',
      justifyContent: 'flex-end',
    },
  },
});
