import { Badge } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    height: '50px',
    alignItems: 'center',
    marginTop: '30px',
    fontSize: '20px',
    flexDirection: 'row',
    paddingLeft: '15%',
    paddingRight: '15%',
    display: 'flex',
    width: '100%',
    webkitBoxShadow: '0px 0px 11px -2px rgba(0,0,0,0.43)',
    boxShadow: '0px 0px 11px -2px rgba(0,0,0,0.43)',
  },
  left: {
    width: '70%',
  },
  right: {
    color: 'black',
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightElements: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderКadius: '0',
    color: 'black',
    fontSize: '70%',
    fontFamily: 'Arial, Verdana, sans-serif',
    alignItems: 'center',
  },
  imageIcon: {
    height: '100%',
  },
  iconRoot: {
    textAlign: 'center',
  },
  text: {
    fontSize: '80%',
    fontFamily: 'Arial, Verdana, sans-serif',
    textAlign: 'center',
  },
  logoText: {
    width: '100%',
    height: '80%',
    fontSize: '100%',
    fontFamily: 'Arial, Verdana, sans-serif',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  badge: {
    right: -3,
    top: 13,
    padding: '0 4px',
  },
  adminPage: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: 'Arial, Verdana, sans-serif',
    '&:hover': {
      backgroundColor: '#49494a',
    },
  },
  badgeIcon: {
    alignItems: 'center',
  },
});

export const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
