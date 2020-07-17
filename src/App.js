import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactList from './components/ContactList';

export class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }
  
  render() {
    return (
      <>
      <h1>IronContacts</h1>
        <ContactList 
          contacts={this.state.contacts}
        />
      </>
    )
  }
}

export default App

