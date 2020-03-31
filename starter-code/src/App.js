import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './ContactsList'

class App extends Component {


  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
        <ContactsList/>
      </div>
    );
  }
}

export default App;
