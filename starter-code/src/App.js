import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/ContactList";

const App = () => (
  <>
    <Navbar />
    <List />
  </>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
