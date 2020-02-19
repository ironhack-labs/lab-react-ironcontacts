import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
