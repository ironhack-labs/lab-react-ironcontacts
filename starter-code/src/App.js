import React, { Component } from "react";
import ContactIndex from "./ContactIndex.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContactIndex />
      </div>
    );
  }
}

export default App;
