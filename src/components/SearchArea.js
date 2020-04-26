/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import {TextField, makeStyles} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { groceriesTemplate } from '../constants/groceriesTemplate';

const useStyles = makeStyles((theme) => ({
  input: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(0.75),
  },
  textField: {
    marginTop: theme.spacing(0.25),
  }
}));

const SearchArea = ({ formChange,  formSubmit, formField, changeAutocomplete, closeAutocomplete, autocompleteIsOpen, checkFormField }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <form noValidate onSubmit = { formSubmit }>
        <Autocomplete
          id="autocomplete-selector"
          freeSolo
          autoComplete
          autoHighlight
          clearOnEscape
          autoSelect
          variant="outlined" 
          className={classes.input}
          inputValue = { formField }
          open = {autocompleteIsOpen}
          onOpen = {checkFormField}
          onClose = {closeAutocomplete}
          onChange = { changeAutocomplete }
          options={groceriesTemplate.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params}     
              onChange = { formChange }
              freeSolo 
              value = { formField }
              label="Add item" 
              fullWidth
              autoFocus
              margin="normal" 
              id="searchfield"
              className={classes.textField}
            />
          )}
        />
      </form>
    </Fragment>
  )
}

export default SearchArea