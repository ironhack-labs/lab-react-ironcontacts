import React from "react";

const Button = ({ handleClick, color, children }) => {
  return (
    <button className="btn" style={{ background: color }} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
