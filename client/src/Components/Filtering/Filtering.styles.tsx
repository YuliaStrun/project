import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  textField: {
    '& > *': {
      width: '100px',
      justifyContent: 'flex-end',
    },
  },
  size: {
    minWidth: '60px',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    marginBottom: '2px',
    justifyContent: 'flex-start',
    fontFamily: 'Arial, Verdana, sans-serif',
    '&:hover': {
      backgroundColor: '#49494a',
    },
  },
  text: {
    height: '100%',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'large',
  },
});

export const theme = createMuiTheme({
  overrides: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'black',
          borderRadius: 4,
          borderColor: 'black',
          boxShadow: '0px 0px 12px -5px rgba(0,0,0,0.34)',
        },
      },
    },
  },
});
