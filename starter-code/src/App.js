import React, { Component } from "react";
import ContactList from "./ContactList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <ContactList />
      </div>
    );
  }
}

export default App;
