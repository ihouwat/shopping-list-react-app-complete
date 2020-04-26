import React, {Component, Fragment } from 'react';
import UncategorizedListItems from '../components/UncategorizedListItems'
import CategorizedListItems from '../components/CategorizedListItems'
import UncategorizedItemSnackbar from '../components/UncategorizedItemSnackbar'


class GroceryLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarIsOpen: false, 
    }
  }

  // Listen for new added items. If the item is uncategorized, it will fire the snackbar 
  componentDidUpdate(prevProps, prevState) {
    const uncategorizedItem = this.props.items[this.props.items.length - 1]
    if(prevProps.modalIsOpen !== this.props.modalIsOpen) {
      // If modal to add item notes opens or closes, do not fire the snackbar
      // Fixes a bug where if the last item added to the grocery list is uncategorized
      // The snackbar is always fired
      return
    } else if (prevProps.items !== this.props.items && uncategorizedItem.activatedSnackbarOnce === true) {
      console.log(prevProps.itemNotes)
      this.fireUncategorizedSnackbar()
    } 
  }

  // Checks for uncategorized items to toggle snackbar warning
  fireUncategorizedSnackbar = () => {
      this.setState({snackbarIsOpen: true})
      setTimeout(() => {
        this.setState({snackbarIsOpen: false});
      }, 4500);
  }


  render() {
    const {...props} = this.props;
    const {category, groceryItems} = this.props;
    const {snackbarIsOpen} = this.state;
    return (
      <Fragment>
        {groceryItems.length > 0 
          ?
            category === 'Order Entered' || category === 'Alphabetical' 
            ? <UncategorizedListItems {...props}/>
            : <CategorizedListItems {...props}/>
            
          : null
          }
          {
            snackbarIsOpen ? <UncategorizedItemSnackbar /> 
            : null
          }
      </Fragment>
    )
  }
}

export default GroceryLists;