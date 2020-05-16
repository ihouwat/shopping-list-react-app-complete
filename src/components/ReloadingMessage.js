import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  message: {
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(2),
    marginTop: theme.spacing(8),
  },
}));

const ReloadingMessage = () => {
  const classes = useStyles();
  return(
    <h1 className={classes.message}>Reloading lists...</h1>
  )
}

export default ReloadingMessage;