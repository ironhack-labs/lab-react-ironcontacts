import React, { Component } from 'react';
import ContactManager from './ContactManager';
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>

        <ContactManager contacts={contacts.splice(0,5)} />

      </div>
    );
  }
}

export default App;
