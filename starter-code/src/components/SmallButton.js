import React from 'react';
import '../App.css';

const SmallButton = (props) => {
  const { children, action, value } = props;
  return (
    <button className='small-button' value={value} onClick={action}>
      {children}
    </button>
  )
}

export default SmallButton;
