import React, { Component } from "react";
import "./App.css";
import Contacts from "./ContactsList";

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
