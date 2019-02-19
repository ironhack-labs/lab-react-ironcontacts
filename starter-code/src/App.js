import React, { Component } from "react";

import "./App.css";
import contacts from "./contacts.json";
import ContactList from "./ContactList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <ContactList />
      </div>
    );
  }
}

export default App;
