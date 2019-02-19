import React, { Component } from "react";
import IronContacts from "./IronContacts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center m-4">IronContacts</h1>
        <IronContacts />
      </div>
    );
  }
}

export default App;
