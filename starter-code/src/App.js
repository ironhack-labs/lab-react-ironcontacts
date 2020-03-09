import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactsList from "./components/ContactsList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">IronContacts</h1>
    </header>
    <ContactsList contacts={contacts.splice(0, 5)} />
  </div>
);

export default App;
