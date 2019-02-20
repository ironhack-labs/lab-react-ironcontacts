import React, { Component } from "react";

import "./App.css";

import Ironcontacts from "./components/Ironcontacts.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>

        <Ironcontacts />
      </div>
    );
  }
}

export default App;
