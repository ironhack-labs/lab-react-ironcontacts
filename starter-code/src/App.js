import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabla from "./Tabla";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <Tabla />
      </div>
    );
  }
}

export default App;
