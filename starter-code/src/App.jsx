import React from "react";
import ReactDOM from "react-dom";
import logo from "./public/logo.svg";
import "./public/App.css";
import contacts from "./public/contacts.json";

console.log(contacts);

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("root");
  ReactDOM.render(<App />, root);
});
