import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable';
import './App.css';

const NUM_CONTACTS_TO_IMPORT = 5;

class App extends Component {
  constructor() {
    super();
    this.state = {
      ironContacts: contacts.filter((contact, index) => {
        if (index < NUM_CONTACTS_TO_IMPORT) {
          return contact;
        }
      }),
    }
  }
  
  render() {
    return (
      <div className='App'> 
        <header>
          <h1 className='title'>IronContacts</h1>
        </header>
        <ContactsTable contacts={this.state.ironContacts} />
      </div>
    );
  }
}

export default App;
