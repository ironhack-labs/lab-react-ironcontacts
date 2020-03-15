import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { List } from "./components/ContactList";

const App = () => (
  <>
    <div id="spinner" className="Spinner-container">
      <div className="Spinner-content">
        <p id="spinner-message" className="Spinner-message"></p>
        <div className="Spinner"></div>
      </div>
    </div>
    <Navbar />
    <List />
  </>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
