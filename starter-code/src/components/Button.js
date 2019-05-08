import React from 'react';

const Button = (props) => {
  return (
  <button onClick={props.onClick}>{props.name}</button> 
  )
}

export default Button;