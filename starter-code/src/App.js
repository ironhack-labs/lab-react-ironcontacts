import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json'
import ContactsList from './components/ContactsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
          <ContactsList contacts={contacts.splice(0,5)} />
        </p>
      </div>
    );
  }
}

export default App;
