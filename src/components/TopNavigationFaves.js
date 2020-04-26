import React, { Fragment } from 'react';
import {Checkbox, IconButton, SvgIcon, Modal, Backdrop, Fade, makeStyles, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import "./TopNavigationFaves.css";

// Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(0.5),
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: 375,
  },
  modalTitle: {
    marginTop: 0,
  },
  listItem: {
    height: theme.spacing(5.5),
  },
}));


const TopNavigationFaves = ({items, faveCheckChildElement, favoriteItems}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    let myObjects = items;
    let map = new Set(myObjects.map(el=>el.name.toLowerCase()));
    favoriteItems.forEach(item => {
     if(item.isChecked && !map.has(item.name.toLowerCase())) {
         return item.isChecked = false
        } else if (!item.isChecked && map.has(item.name.toLowerCase())) {
          return item.isChecked = true
        } 
    })
    setOpen(true);
  };  

  const handleClose = (event, reason) => {
    if(reason === "backdropClick") {
      return setOpen(false)
    }
    setOpen(false);
  };

  const listFavoriteItems  = favoriteItems.map((item, index) => {
    return (
      <ListItem dense divider key={index} className={classes.listItem}>
      <ListItemText primary={item.name}/>
      <ListItemIcon>
        <Checkbox 
          checked = {item.isChecked}
          key = {item.id}
          value = {item.name}
          onClick={faveCheckChildElement}
          inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
        />
      </ListItemIcon>
      </ListItem>
  )})

  return (
    <Fragment>
      <Fragment>
        <IconButton 
          disableFocusRipple
          size='medium'
          color='default'
          aria-label='select favorite items'
          onClick={handleOpen}
        >
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </SvgIcon>
      </IconButton>
      </Fragment>
      <Fragment>
        <Modal
          aria-labelledby="favorite items"
          aria-describedby="pick your top favorite items"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper + ' Modal-dimensions'}>
              <h2 id="transition-modal-title" className={classes.modalTitle}>Top 10 Favorite Items</h2>
              <List dense disablePadding>
                {listFavoriteItems}
              </List>
            </div>
          </Fade>
        </Modal>
      </Fragment>
    </Fragment>
  );
}


export default TopNavigationFaves;