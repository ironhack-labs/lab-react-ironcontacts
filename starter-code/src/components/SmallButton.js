import React from 'react';
import '../App.css';

const SmallButton = (props) => {
  const { children, action } = props;
  return (
    <button className='small-button' onClick={action}>
      {children}
    </button>
  )
}

export default SmallButton;
