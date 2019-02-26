import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DynamicContactList from "./DynamicContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicContactList />
      </div>
    );
  }
}

export default App;
