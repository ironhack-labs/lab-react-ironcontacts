import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button onClick={props.role} className="btn">{props.value}</button>
    
  );
};

export default Button;