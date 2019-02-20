import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'

import ContactList from "./components/contactList.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ContactList />
      </div>
    );
  }
}

export default App;
