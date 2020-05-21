import React, { Fragment } from 'react';
import { FormControlLabel, makeStyles, Menu, MenuItem, IconButton, SvgIcon } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  delOrRecoverMenu: {
    marginRight: theme.spacing(-1),
  },
  menuItem: {
    color: theme.palette.text.secondary,
    display: 'flex',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    fontSize: theme.spacing(1.75),
  },
}))

const DeleteOrRecoverCompleted = ({deleteallcompleted, recoverallcompleted}) => {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <FormControlLabel
        aria-label="Menu"
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        control={
          <IconButton 
          disableFocusRipple
          size='medium'
          color='default'
          aria-haspopup="true"
          aria-controls="delete-recover-menu"
          aria-label="menu to delete or recover all items"
          onClick={handleClick}
          className={classes.delOrRecoverMenu}
          >
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 19 21" width="19px" height="19px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </SvgIcon>
          </IconButton>
          }
        />
        <Menu
        id="delete-recover-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
          <MenuItem className={classes.menuItem} onClick={()=> {
            handleClose()
            recoverallcompleted()
            }}>Uncheck all items</MenuItem>
            <MenuItem className={classes.menuItem} onClick={()=> {
            handleClose()
            deleteallcompleted()
            }}>Delete all checked items</MenuItem>
        </Menu>
    </Fragment>
  )
}

export default DeleteOrRecoverCompleted;