import React from "react";
import ReactDOM from "react-dom";
import "./public/App.css";
import contacts from "./public/contacts.json";
import { Header } from "./components/Header";

console.log(contacts);

const App = () => <Header />;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("root");
  ReactDOM.render(<App />, root);
});
