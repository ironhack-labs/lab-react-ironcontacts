import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactList from "./ContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ContactList></ContactList>
      </div>
    );
  }
}

export default App;
