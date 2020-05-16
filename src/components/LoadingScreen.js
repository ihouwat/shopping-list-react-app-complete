import React from 'react';
import './LoadingScreen.css';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    width: '100%',
    height: '100%',
    background: theme.palette.primary.dark,
    position: 'absolute',
  },
}));

const LoadingScreen = () => {
  const classes = useStyles();
  return(
    <>
      <div className={classes.background}>
        <div class="container">
          <div class="bear">
            <div class="head">
              <div class="head-copy"></div>
              <div class="left-ear">
                <div class="inner-ear"></div>
              </div>
              <div class="right-ear">
                <div class="inner-ear"></div>
              </div>
              <div class="left-eye">
                <div class="left-pupil"></div>
              </div>
              <div class="right-eye">
                <div class="right-pupil"></div>
              </div>
              <div class="snout">
                <div class="nose"></div>
                <div class="upper-lip"></div>
                <div class="lip-left"></div>
                <div class="lip-right"></div>
              </div>
            </div>
            <div class="torso">
              <div class="right-arm">
                <div class="claws"></div>
              </div>
              <div class="left-arm">
                <div class="claws"></div>
              </div>
            </div>
            <div class="legs">
              <div class="right-leg">
                <div class="toes"></div>
              </div>
              <div class="left-leg">
                <div class="toes"></div>
              </div>
            </div>
          </div>  
          <div class="plumes">
            <div class="plume-1"></div>
            <div class="plume-2"></div>
            <div class="plume-3"></div>
            <div class="plume-4"></div>
            <div class="plume-5"></div>
          </div>
          <div class="shopping-cart">
            <div class="handle"></div>
            <div class="back"></div>
            <div class="body-top"></div>
            <div class="body-front"></div>
            <div class="body-bottom"></div>
            <div class="body-vertical-stripes"></div>
            <div class="body-horizontal-stripes"></div>
            <div class="body-to-base"></div>
            <div class="base-curve"></div>
            <div class="base-bottom"></div>
            <div class="wheels">
              <div class="back-wheel">
                <div class="wheel-inner"></div>
              </div>
                <div class="front-wheel">
                <div class="wheel-inner"></div>
              </div>
            </div>
          </div>
          <div class="fumes">
            <div class="fume-1"></div>
            <div class="fume-2"></div>
            <div class="fume-3"></div>
            <div class="fume-4"></div>
            <div class="fume-5"></div>
            <div class="fume-6"></div>
          </div>
          <div class="text">
            Get ready to zoom along while I fetch your lists! 
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen;