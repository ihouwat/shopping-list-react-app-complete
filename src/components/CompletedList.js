import React from 'react';
import './CompletedList.css';
import DeleteOrRecoverCompleted from './DeleteOrRecoverCompleted';

// Import Material Design UI Components
import { Box, makeStyles, List, ListItem, ListItemText, ListItemIcon, Typography, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, IconButton, SvgIcon } from '@material-ui/core';

// Expansion Panel styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  panel: {
    boxShadow: 'none',
    backgroundColor: theme.palette.background.appBackground,
  },
  boxDisplay: {
    display: "flex",
    height: theme.spacing(8),
  },
  summary: {
    padding: '0 16px 0 0',
    flexGrow: 1,
  },
  details: {
    padding: '0',
    textDecoration: 'line-through',
    textDecorationColor: theme.palette.text.secondary,
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(3),
  },
  list: {
    width: '100%',
  },
  listItem: {
    paddingRight: '0',
  },
}));

const CompletedList = ({ completedItems, deleteItem, recoverItem, deleteallcompleted, recoverallcompleted }) => {
  //Expansion panel settings from Material-UI
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Compiling list
  const listItems = completedItems.map((item, index) => {
    return (
    <ListItem button key={index} className = {classes.listItem}>
      <ListItemText secondary = {item.name}  />
      <ListItemIcon onClick={deleteItem.bind(this, item, 'completedItems')}>
        <IconButton aria-label = 'trash'>
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </SvgIcon>
        </IconButton>
      </ListItemIcon>
      <ListItemIcon onClick={recoverItem.bind(this, item)}>
        <IconButton area-label= 'recover'>
          <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </SvgIcon>
        </IconButton>
      </ListItemIcon>
    </ListItem>
    )
  })

  if(completedItems.length === 0) {
    return null;
  }
  
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <Box className={classes.boxDisplay}>
          <ExpansionPanelSummary
            expandIcon={
              <SvgIcon>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </SvgIcon>
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={classes.summary}
          >
            <Typography className={classes.heading}>{completedItems.length} checked off</Typography>
          </ExpansionPanelSummary>
          <DeleteOrRecoverCompleted
            deleteallcompleted={deleteallcompleted} 
            recoverallcompleted={recoverallcompleted}
          />
        </Box>
        <ExpansionPanelDetails className={classes.details}>
          <List component="li" aria-label="completed items" className={classes.list}>
            {listItems}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default CompletedList;