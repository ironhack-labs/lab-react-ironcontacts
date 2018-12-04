import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/card";

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="App">
        <Card></Card>
      </div>
    );
  }
}

export default App;
