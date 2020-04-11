import React from 'react';
import '../App.css';

const SmallButton = (props) => {
  return (
    <button className='small-button'>
      {props.children}
    </button>
  )
}

export default SmallButton;
