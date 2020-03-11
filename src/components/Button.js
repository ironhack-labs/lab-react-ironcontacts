import React from "react";

import "./Button.css";

export const Button = ({ className, setClick, children }) => (
  <input
    className={className}
    type="button"
    onClick={() => setClick()}
    value={children}
  />
);
