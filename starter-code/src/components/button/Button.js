import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.role}>{props.value}</button>
  );
};

export default Button;