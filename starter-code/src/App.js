import React from "react";
import ReactDOM from "react-dom";
import logo from "../public/logo.svg";
import "./App.css"
import { Ironcontacts } from "./ironcontacts"

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Ironcontacts />
</div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
