import React from "react";
import ReactDOM from "react-dom";
import "./public/App.css";
import { Header } from "./components/Header";
import { ContactList } from "./components/ContactList";

const App = () => (
  <div>
    <Header />
    <ContactList />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
