import React from 'react';

const FixedScroll = (props) => {
  return (
    <div style={{ left: '0', position: 'fixed', width: '100vw', top: '0', zIndex: '100' }}>
      {props.children}
    </div>
  );
}

export default FixedScroll;