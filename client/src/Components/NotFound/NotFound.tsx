import React from 'react';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { RouteComponentProps } from 'react-router-dom';

import { useStyles } from './NotFound.styles';

interface State {
  from: string;
}

export const NotFound: React.FC<RouteComponentProps<never, never, State>> = ({ location }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SentimentDissatisfiedOutlinedIcon />
      Page {location.state.from} is not found
    </div>
  );
};
