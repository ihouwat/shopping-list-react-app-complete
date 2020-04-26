import React, { Fragment } from 'react';
import { Paper, Container, Box } from '@material-ui/core';

const TopNavigation = (props) => {
  return (
    <Fragment>
      <Paper elevation={4} square={true}>
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