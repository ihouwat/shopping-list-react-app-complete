import React from 'react';
// Import Material Design UI Components
import ListItemTemplate from './ListItemTemplate';
import { List, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const UncategorizedListItems = ({modalClose, modalItemName, modalOpen, deleteItem, completeItem, modalIsOpen, itemNotes, onAddNote, groceryItems, category}) => {
  const classes = useStyles();
  
  // Helper method to sort groceries alphabetically
  const sortGroceriesAlphabetically = (a, b) => {
    const itemA = a.name.toUpperCase();
    const itemB = b.name.toUpperCase();
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison
  }
  
  // Main method that creates a temporary list based on this.state.items
  const sortedGroceries = () => {
    let tempList = groceryItems.map(el=>el)
    if (category === "Order Entered") {
      return tempList
    }
    else if(category === "Alphabetical") {
      let sortedList = tempList.sort(sortGroceriesAlphabetically)
      return sortedList
    }
  }
  
  // Create a sorted list which will be passed to the mapping array below
  const listToMap = sortedGroceries();
  // Map out list items
  const listItems = listToMap.map((item, index) => {
    return (
      <ListItemTemplate 
        key={index}
        item={item}
        modalClose={modalClose}
        modalItemName={modalItemName}
        modalOpen={modalOpen}
        deleteItem={deleteItem}
        completeItem={completeItem}
        modalIsOpen={modalIsOpen}
        itemNotes={itemNotes}
        onAddNote={onAddNote}
      />
    )
  })

 
  return (
    <List aria-label="grocery list category" className={classes.list}>
      {listItems}
    </List>
  )
}

export default UncategorizedListItems;