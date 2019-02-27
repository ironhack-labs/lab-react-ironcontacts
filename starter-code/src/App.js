import React, { Component } from "react";
import logo from "./logo.svg";
import ContactsList from "./components/ContactsList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron contact</h1>
        <ContactsList clickToDelete={() => this.deleteContactHandler()} />
      </div>
    );
  }
}

export default App;
