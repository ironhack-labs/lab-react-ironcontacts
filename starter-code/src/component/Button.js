import React from 'react';

const Button = ({btnClick, children}) => {
  return (
    <a className="link-btn" onClick={btnClick}>{children}</a>
  );
}

export default Button;