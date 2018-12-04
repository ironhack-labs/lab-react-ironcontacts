import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./contacts/contacts.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      {/* <button onClick={this.addCelebrities}>Add Random Contact</button> */}
      <Contact></Contact>
      </div>
    );
  }
}

export default App;
