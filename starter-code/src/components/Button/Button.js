import React from 'react';

const Button = ({ onclick, children, styles, type }) => {
  return (
    <button type={type} onClick={() => onclick()} className={`button ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
