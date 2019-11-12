import React, { Component } from 'react';
import ContactList from './components/ContactList'
import contacts from './contacts.json';
import './App.css';

const fiveContacts = contacts.slice(0,5);

class App extends Component {
  state = {
    data: {
      contacts: fiveContacts
    }
  }

  render() {
    return (
      <div className="App">
        <ContactList contacts={fiveContacts}/>
      </div>
    );
  }
}

export default App;
