import React, { Component } from 'react';
import './App.css';
import ContactsTable from './components/contacts/ContactsTable';
import contactsData from './data/contacts.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <ContactsTable contacts={contactsData}/>
      </div>
    );
  }
}

export default App;
