import React, { Component } from 'react';
import './App.css';
import DynamicContacts from "./components/DynamicContacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronContacts</h1>
        <DynamicContacts />
      </div>
    );
  }
}

export default App;
