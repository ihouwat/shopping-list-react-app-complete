import React, { Fragment } from 'react';
import { Paper, Container, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.background.paper,
  },
}));

const TopNavigation = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper elevation={4} square={true} className={classes.paper}>
        <Container maxWidth="sm">
          <Box display="flex" alignItems="center" height={64}>
            {props.children}
          </Box>
        </Container>
      </Paper>
    </Fragment>
  )
}

export default TopNavigation;