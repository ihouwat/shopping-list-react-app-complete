import React from 'react';
import { Box } from '@material-ui/core';
import "./TopNavigationTitle.css";

const TopNavigationTitle = () => {
  return (
    <Box fontSize={20} flexGrow={1} textAlign="left" color="text.primary">
      <h1 class="App-title">My Shopping List</h1>
    </Box>
  )
}

export default TopNavigationTitle