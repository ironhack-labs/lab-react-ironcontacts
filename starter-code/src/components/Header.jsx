import React from "react";
import logo from "../public/logo.svg";

export const Header = ({ addRandomContact }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
    </header>
  </div>
);
