import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GiveTable from './components/GiveTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Ironcontacts</h1>
        </header>
        <GiveTable></GiveTable>
      </div>
    );
  }
}

export default App;
