import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from "./contact.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact />
      </div>
    );
  }
}

export default App;
