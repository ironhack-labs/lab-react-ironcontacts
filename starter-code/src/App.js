import React, { Component } from "react";
import logo from "./logo.svg";
import Contacts from "./Contacts";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts></Contacts>
      </div>
    );
  }
}

export default App;
