import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SUPER DUPER MOVIE STAR LIST </h1>
        <Table />
      </div>
    );
  }
}

export default App;
