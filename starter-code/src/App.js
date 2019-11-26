import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./Contacts.jsx";

class App extends Component {
  render() {
    return (
      <div className="full-content">
        <h1 className="IronContact">IronContacts</h1>
        <Contacts />
      </div>
    );
  }
}

export default App;
