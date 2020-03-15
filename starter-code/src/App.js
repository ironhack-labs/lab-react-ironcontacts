import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Contacts } from "./components/Contacts";

const App = () => (
  <div>
    <Contacts />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});

export default App;
