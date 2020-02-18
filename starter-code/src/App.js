import React, { Component } from 'react';
import ContactManager from './ContactManager';
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ironhack Movie Stars</h1>

        <ContactManager contacts={contacts} />

      </div>
    );
  }
}

export default App;
