import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {SvgIcon, Box, withStyles, Typography} from '@material-ui/core';

const styles = theme => ({
  background: {
    background: theme.palette.primary.dark,
  },
  icon: {
    color: theme.palette.secondary.main,
    fontSize: theme.spacing(25),
  },
  textDark: {
    marginTop: theme.spacing(3),
    color: theme.palette.primary.contrastText,
    fontSize: theme.spacing(3),
    fontWeight: 600,
  },
})

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render() {
    const { classes } = this.props;
    if (this.state.hasError) {
      return ( 
        <Fragment>
          <Box
            className={classes.background}
            height = '100vh'
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <SvgIcon className={classes.icon}>  
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>            </SvgIcon>
            <Typography variant="h1" className={classes.textDark}>
              Ooops, something broke in the app!
            </Typography>
          </Box>
        </Fragment>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorBoundary);