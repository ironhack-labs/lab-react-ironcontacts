import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { ContactsList } from "./components/ContactList";
import { Title } from "./components/CelebrityTitle";

const App = () => (
  <div>
    <Title />
    <ContactsList />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});

export default App;
