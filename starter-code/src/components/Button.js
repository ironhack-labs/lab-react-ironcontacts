import React from "react";

import "./Button.css"

export const Button = ({ setClick, key, children }) => (
  <button type="button" className="Button" onClick={() => setClick(key)}>
    {children}
  </button>
);
