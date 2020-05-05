import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact.jsx";
import Contacts from "./components/Contacts.jsx";

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
