import React from "react";

export const Button = ({ className, setClick, children }) => (
  <input
    className={className}
    type="button"
    onClick={() => setClick()}
    value={children}
  />
);
