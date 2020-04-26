import React from 'react';
import { Snackbar, Slide } from '@material-ui/core';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const UncategorizedItemSnackbar = () => {
  const [open, setOpen] = React.useState(true);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(open)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return setOpen(false);
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        onEnter={handleClick(TransitionUp)}
        onClose={handleClose}
        TransitionComponent={transition}
        autoHideDuration={4000}
        message="Added item is uncategorized."
      />
  </div>
  )
}

export default UncategorizedItemSnackbar;
