import React, {Fragment} from 'react';
import {groceryStores} from '../constants/groceryStores';
import ListItemTemplate from './ListItemTemplate';
// Import Material Design UI Components
import { Typography, makeStyles, List} from '@material-ui/core';

// Material-UI styles
const useStyles = makeStyles((theme) => ({
  // Category styles
  categoryTitle: {
    borderTop: '1px solid #dadce0',
    lineHeight: '2em',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingTop: theme.spacing(2.25),
    paddingBottom: theme.spacing(2.2),
    textAlign: 'left',
    fontWeight: '700',
    fontSize: theme.spacing(1.8125),
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
  },
  // List styles
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  '@global': {
    'li > p:nth-of-type(1)': {
      borderTop: '0px',
    },
  },
}));


const CategorizedListItems = ({ category, modalItemName, itemNotes, groceryItems, completeItem, deleteItem, onAddNote, modalClose, modalOpen, modalIsOpen }) => {
  // Use styles from this file
  const classes = useStyles();

  // Helper method to create a temp copy of the grocery store array, with an empty items array
  const storeDeepCopyfunction = (inArray) => {
    let outArray, value, key
      if(typeof inArray !== "object" || inArray === null) {
        return inArray // Return the value if inArray is not an object
      }
      // Create an array or object to hold the values
      outArray = Array.isArray(inArray) ? [] : {}
      for (key in inArray) {
        value = inArray[key]
        // Recursively (deep) copy for nested objects, including arrays
        outArray[key] = (key === 'items') ?  outArray[key] = []
        : (typeof value === "object" && value !== null && key !== 'items') ? storeDeepCopyfunction(value)
        : value
      }
    return outArray
  }

  // Helper method to search Grocery Store template array for item
  const searchGroceryStoreTemplate = (store, grocery) => {
    for (const storeCategory of store) {
      for (let i=0; i<storeCategory.items.length; i++) {
        if (storeCategory.items[i] && grocery && storeCategory.items[i].toLowerCase() === grocery.name.toLowerCase()) {
          // If an item matches one found in the template store, create new array
          let matchedItem = [];
          // Matched item array includes an object with store-specific id, category, name 
          matchedItem.push({
              storeOrder: storeCategory.storeOrder,
              category: storeCategory.category,
              name: grocery.name,
            });
          return matchedItem
        }
      }
    }
  }
  
  // Helper method to match item with its relevant store category
  const identifyCategoryInStoreTemplate = (searchedItem, store) => {
    // Variable to isolate the item category
    let matchedItemCategory = searchedItem[0].storeOrder
    for (let i = 0; i < store.length; i++ ) {
      if(store[i].storeOrder === matchedItemCategory){
        return store[i].storeOrder
      }
    }
  }

  const sortedGroceries = () => {
    // Change current store by listening to state changes of 'category' from top-level App.js
    let currentStoreIndex = groceryStores.stores.findIndex((store, index) => store.storeName === category)
    let currentStore = groceryStores.stores[currentStoreIndex]
    // Create a temporary list of the groceryItems coming from top-level App.js
    let tempList = groceryItems.map(el=>el)
    // Create a copy of the store template
    const copiedStore = storeDeepCopyfunction(currentStore)
    for (const item in tempList) {
      // Find if item from template list in store template
      let searchedItem = searchGroceryStoreTemplate(currentStore.storeCategories, tempList[item])
      if (searchedItem !== undefined){
        // Match the item with its category storeOrder in current store template
        const matchId = identifyCategoryInStoreTemplate(searchedItem, currentStore.storeCategories)
        for (let i in copiedStore.storeCategories){
          // If match, add the item in the appropriate array index of copiedStore
          if (copiedStore.storeCategories[i].storeOrder === matchId) {
            copiedStore.storeCategories[i].items.push(tempList[item])
          }
        }
      } else {
        // If the new item does not match any known category, push to "Uncategorized Items"
        // Find "Uncategorized Items" index in the store
        let uncategorizedIndex = copiedStore.storeCategories.find(category => category.category === 'Uncategorized Items')
        // Add new key-value pair to item. This triggers the fireUncategorizedSnackbar() method in App.js
        // This leads to a snackbar popping up to warn the user the added item is uncategorized
        if(!tempList[item]['activatedSnackbarOnce']){
          tempList[item]['activatedSnackbarOnce'] = true;
        }
        // Push items to the "Uncategorized Items" index
        uncategorizedIndex.items.push(tempList[item])
      }
    }    
    return copiedStore
  }

  // Create a sorted list which will be passed to the mapping array below
  const listToMap = sortedGroceries();
  
  const listItems = (listToMap.storeCategories).map((category, index) => {
    return (
      <Fragment key={index} >
      { category.items.length > 0
        ? <Typography key={index} className = {classes.categoryTitle}>
            {category.category}
          </Typography>
        : null
      }
      {category.items.map((item, index) => {
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
        })}
      </Fragment>
    ) 
})
 
  return (
    <List aria-label="grocery list category" className={classes.list}>
      {listItems}
    </List>
  )

}

export default CategorizedListItems;