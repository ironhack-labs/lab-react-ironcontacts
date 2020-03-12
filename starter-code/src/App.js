import React from "react";
import ReactDOM from "react-dom";
import logo from "../public/logo.svg";
import "./App.css";

const App = () => (
  <>
    <div className="App">Hola</div>
  </>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
