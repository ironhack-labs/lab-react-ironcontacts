import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
// import Contact from "./components/Contacts";

class App extends Component {
  constructor() {

  state = {
    contacts: contacts.slice(0,5)
  };

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

        <div className="Card Table"
          {this.state.contacts.map((co))}
      </div>
    );
  }
}

export default App;
