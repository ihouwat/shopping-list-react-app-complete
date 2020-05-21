import React, { Fragment, Component } from 'react';
import TopNavigationCategoryList from './TopNavigationCategoryList';
import {IconButton, SvgIcon, Menu, Box} from '@material-ui/core';

class TopNavigationCategoryDisplay extends Component {
    constructor(props) {
      super(props);
      this.state = {
        anchorEl: null,
      }
    }

    handleClick = (event) => {
      this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
      this.setState({anchorEl: null});
    };

  render() {
    const category = this.props.category;
    const {onCategoryChange} = this.props;
    const {anchorEl} = this.state;
    return (
      <Fragment>
        <IconButton 
            disableFocusRipple
            size='medium'
            aria-label='pick category'
            aria-haspopup="true"
            aria-controls="category-menu"
            onClick={this.handleClick}
            color='primary'
          >
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </SvgIcon>
          </IconButton>
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          value={category} 
        >
          <Box
            width={200}
          >
            <TopNavigationCategoryList
              onCategoryChange= { onCategoryChange }
              category = { category }
              handleClose = { this.handleClose }
            />
          </Box>
        </Menu>
      </Fragment>
    );
  }
}

export default TopNavigationCategoryDisplay;