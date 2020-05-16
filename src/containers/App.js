import React, { Component } from 'react';
import './App.css';
// Import Components
import SearchArea from '../components/SearchArea';
import GroceryLists from './GroceryLists';
import CompletedList from '../components/CompletedList';
import EmptyList from '../components/EmptyList';
import TopNavigation from '../components/TopNavigation';
import TopNavigationTitle from '../components/TopNavigationTitle';
import TopNavigationCategoryDisplay from '../components/TopNavigationCategoryDisplay';
import TopNavigationToggleDarkTheme from '../components/TopNavigationToggleDarkTheme';
import TopNavigationFaves from '../components/TopNavigationFaves';
import FixedScroll from '../components/FixedScroll';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingScreen from '../components/LoadingScreen';
import ReloadingMessage from '../components/ReloadingMessage';
// Import Material Design UI Custom Theme API
import {  Box, withStyles } from '@material-ui/core';

const styles = theme => ({
  app: {
    background: theme.palette.background.default,
    textAlign: 'center',
    height: '100%',
  },
  groceriesContainer: {
    background: theme.palette.background.paper,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.divider,
  },
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsLoading: window.sessionStorage.getItem("loadStatus") || "first load",
      items: [], // populated from back-end, see componentDidMount method
      completedItems: [], // populated from back-end, see componentDidMount method
      favoriteItems: [], // populated from back-end, see componentDidMount method
      groceriesTemplate: [], // populated from back-end, see componentDidMount method
      formField: '',
      category: 'Fresh Thyme',
      modalIsOpen: false,
      modalItemName: '',
      itemNotes: '',
      autocompleteIsOpen: false,
    }
    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onRecoverItem = this.onRecoverItem.bind(this);
    this.addToList = this.addToList.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.onCloseAutocomplete = this.onCloseAutocomplete.bind(this);
    this.autocompleteCheckFormField=this.autocompleteCheckFormField.bind(this);
  }

  // Methods
  // On mount, get items, completed items, and top ten favorite items
  componentDidMount () {
    fetch('https://quickshopper-backend.herokuapp.com/')
    .then(response => response.json())
    .then(response => 
      this.setState({
        items: response.items,
        completedItems: response.completedItems,
        favoriteItems: response.favoriteItems,
        groceriesTemplate: response.groceriesTemplate,
        category: window.localStorage.getItem('category') || 'Order Entered',
        appIsLoading: null,
      }))
      window.sessionStorage.setItem('loadStatus', 'reloading')
  }

  // Generic add grocery method
  addToList = (item) => {
    fetch('https://quickshopper-backend.herokuapp.com/additem', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: item})
    })
    .then(response => response.json())
    .then(response => this.setState({items: response.items}))
  }

  // Listen to search area input for the searchform component
  onFormChange = (event) => {
    this.setState({formField: event.target.value})
  }

  // When selecting item from autocomplete, add grocery item and clear form
  onChangeAutocomplete = (event, value, reason) => {
    // If selected value null, nothing happens
    if (reason === "blur") {
      this.setState({formField: ''})
      this.setState({autocompleteIsOpen: false})
      return
    } else if (value === null ) {
      return
    }
    //Add selected value to list
    this.addToList(value)
    //Empty form
    this.setState({formField: ''})
  } 

  onCloseAutocomplete = (event, reason) => {
    if(reason === "escape" || reason === "select-option"){
      this.setState({autocompleteIsOpen: false})
    } 
  } 

  autocompleteCheckFormField = (event) => {
    if (this.state.formField === '') {
      this.setState({autocompleteIsOpen: false})
    } 
    else{this.setState({autocompleteIsOpen: true})
  }
  }


  // Listen to search area input while filling out list item note
  onAddNote = (event) => {
    this.setState({itemNotes: event.target.value})
  }

  // On 'enter' add grocery item
  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.formField === '') {
      return;
    }
    this.addToList(this.state.formField.charAt(0).toUpperCase(0) + this.state.formField.slice(1))
    this.setState({formField: ''})
  }

  // Checks grocery list for matches with favorite items
  // Toggles checkbox in Favorite Items modal depending on grocery list content
  // Adds/deletes items to the list
  faveCheckChildElement = (event) => {
    let favoriteItems = this.state.favoriteItems
    let stateItems = new Set(this.state.items.map(el=>el.name.toLowerCase()));
    //Toggle checkbox
    favoriteItems.forEach(item => {
      if (item.name === event.target.value)
      item.isChecked =  event.target.checked
    })
    //Search grocery list and add/remove items accordingly
    favoriteItems.forEach(item => {
      let faveLowerCase = item.name.toLowerCase()
      if(item.isChecked && !stateItems.has(faveLowerCase)) {
        this.addToList(item.name)
      } else if (!item.isChecked && stateItems.has(faveLowerCase)) {
        this.onDeleteItem(item.name, 'items')
      }
    }) 
  }

  // Acquire grocery item, move item from active to completed list
  onCompleteItem = (completedItem) => {
    fetch('https://quickshopper-backend.herokuapp.com/completeitem', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        item: completedItem,
      })
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        items: response.items,
        completedItems: response.completedItems
      })
    })
  }

  // Fully delete item from whichever list it is in 
  onDeleteItem = (deletedItem, listName) => {
    fetch('https://quickshopper-backend.herokuapp.com/deleteitem', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        item: deletedItem,
        listName: listName
      })
    })
      .then(response => response.json())
      .then(response => {
        response.listName === 'items' ? this.setState({items: response.updatedList})
        : this.setState({completedItems: response.updatedList})
        }) 
  }

  // Readd item from completed list to grocery list
  onRecoverItem = (item) => {
    fetch('https://quickshopper-backend.herokuapp.com/recoveritem',{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        item: item,
      })
    })
    .then(response => response.json())
    .then(response => 
      this.setState({
        items: response.items,
        completedItems: response.completedItems,
      })
    )
  }

  // Remove all completed items from completed List
  onDeleteAllCompleted = () => {
    fetch('https://quickshopper-backend.herokuapp.com/deleteallcompleted',{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(response => this.setState({completedItems: response.completeditems}))
  }

    // Readd all completed items to grocery list
  onRecoverAllCompleted = () => {
    fetch('https://quickshopper-backend.herokuapp.com/recoverallcompleted',{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then(response => 
        this.setState({
          items: response.items,
          completedItems: response.completedItems,
        })
      )
  }

   // Modal open method for grocery list component
   // For adding notes to grocery list item
   modalOpen = (item) => {
    fetch('https://quickshopper-backend.herokuapp.com/openmodal',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        item: item
      })
    })
      .then(response => response.json())
      .then(response => 
        this.setState({
          modalItemName: response.modalItemName,
          itemNotes: response.itemNotes,
          modalIsOpen: true
        }))
   };
 
    // Modal close method for grocery list component
    // Saves note to database
   modalClose = () => {
    fetch('https://quickshopper-backend.herokuapp.com/addnote',{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        itemName: this.state.modalItemName,
        note: this.state.itemNotes,
      })
    })
    .then(response => response.json())
    .then(response => this.setState({items: response.items}))
    .then(this.setState({
      modalIsOpen: false,
      itemNotes: '',
      modalItemName: ''
    })); // Close modal
  };

  // Category menu handle to change category or grocery store
  onCategoryChange = (route) => {
    this.setState({category: route});
    // Web API property that saves the category in the browser storage
    // Data is saved across browser sessions
    window.localStorage.setItem('category', `${route}`)
  }
  
  // Render
  render () {
    const { classes } = this.props;
    const { autocompleteIsOpen, category, modalItemName, favoriteItems, 
      formField, items, completedItems, itemNotes, 
      modalIsOpen, groceriesTemplate, appIsLoading } = this.state;
    return (
       <div className={classes.app}>
          <ErrorBoundary>
              {appIsLoading === "first load" 
              ? <LoadingScreen />
              : <>
                <FixedScroll>
                  <TopNavigation>
                    <TopNavigationTitle/>
                    <TopNavigationToggleDarkTheme/>
                    <TopNavigationCategoryDisplay 
                      category = {category}
                      onCategoryChange = {this.onCategoryChange}
                    />
                    <TopNavigationFaves 
                      items = {items}
                      favoriteItems = {favoriteItems}
                      faveCheckChildElement = {this.faveCheckChildElement}
                    />
                  </TopNavigation>
                </FixedScroll>
                <Box className={'Padding-box'}>
                  <Box className={`${classes.groceriesContainer} Groceries-container` }>
                    <SearchArea
                      formChange = {this.onFormChange}
                      formSubmit = {this.onFormSubmit}
                      formField = {formField}
                      groceriesTemplate = {groceriesTemplate}
                      autocompleteSelectValue = {this.onAutocompleteSelectValue}
                      closeAutocomplete = {this.onCloseAutocomplete}
                      checkFormField = {this.autocompleteCheckFormField}
                      autocompleteIsOpen = {autocompleteIsOpen}
                      changeAutocomplete = {this.onChangeAutocomplete}
                    />
                    <GroceryLists 
                      category = { category }
                      itemNotes = { itemNotes }
                      modalIsOpen = { modalIsOpen }
                      modalItemName  = { modalItemName }
                      modalClose = { this.modalClose }
                      modalOpen = { this.modalOpen }
                      onAddNote = { this.onAddNote }
                      groceryItems = { items } 
                      completeItem = {this.onCompleteItem}
                      deleteItem = {this.onDeleteItem}
                      items = {items}
                    />
                  </Box>
                  <Box className={'Completed-container'}>
                    { items.length === 0 && completedItems.length === 0 && appIsLoading !== "reloading" && <EmptyList /> }
                    { appIsLoading === "reloading" && <ReloadingMessage /> }
                    <CompletedList 
                      completedItems = { completedItems }
                      deleteItem = {this.onDeleteItem}
                      recoverItem = {this.onRecoverItem}
                      deleteallcompleted = {this.onDeleteAllCompleted}
                      recoverallcompleted = {this.onRecoverAllCompleted}
                    />
                  </Box>
                </Box>
              </>
              }
          </ErrorBoundary>
      </div>
    );
  }
}

export default withStyles(styles)(App);
