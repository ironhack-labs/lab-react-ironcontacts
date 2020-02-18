import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import IronContacts from "./IronContacts.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Iron Contacts</h1>
        <IronContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
