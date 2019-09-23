import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  render() {
    const message = "This is my app";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message}</p>
        </header>
      </div>
    );
  }
}

export default App;
