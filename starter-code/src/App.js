import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
