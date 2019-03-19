import React, { Component } from 'react';
import logo from './real-logo.png';
import './App.css';
import Table from './components/stateless/Table'

class App extends Component {



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IronContacts</h1>
        </header>
        <p className="App-intro">
          To get started, every actor is worse than Nicolas Cage.
        </p>
        <Table />
      </div>
    );
  }
}

export default App;
