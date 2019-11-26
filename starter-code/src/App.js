import React, { Component } from "react";
import "./App.css";
//Import components
import Table from "./Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ironhack Contacts</h1>
        </header>
        <Table />
      </div>
    );
  }
}

export default App;
