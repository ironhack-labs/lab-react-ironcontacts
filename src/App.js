import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <Contacts />
      </div>
    );
  }
}

export default App;
