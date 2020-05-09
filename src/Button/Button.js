import React from 'react';
import './Button.css';

function Button({method,children}) {
  return (
      <button type='button' onClick={method}>{children}</button>
  );
}

export default Button;
