import React, { Component } from "react";
import "./App.css";

import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Table />
      </div>
    );
  }
}

export default App;
