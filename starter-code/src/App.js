import React, { Component } from "react";
import "./App.css";
import ContactList from "./Contact.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
