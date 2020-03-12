import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">IronContacts</h1>
      </header>

      <ContactList />
      <footer>&copy; 2020 Teresa Pelinski – Ironhack Madrid</footer>
    </div>
  );
};


export default App;

/* object oriented

import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/
