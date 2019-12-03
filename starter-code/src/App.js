import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ContactsTable contactsArr={contacts} />
      </div>
    );
  }
}

export default App;
