import React, { Component } from "react";
import "./App.css";
import ContactsList from "./ContactsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IronContacts</h2>
          <ContactsList />
      </div>
    );
  }
}

export default App;
