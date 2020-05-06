import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayContacts from "./components/DisplayContacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Iteration 1 | Display 5 Contacts</h1>
        <DisplayContacts />
      </div>
    );
  }
}

export default App;
