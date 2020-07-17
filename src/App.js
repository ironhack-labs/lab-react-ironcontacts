import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactList from './components/ContactList';

export class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  addContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];

    if (this.state.contacts.find(contact => contact.id === random.id)) {
      if (this.state.contacts.length < contacts.length) {
        this.addContact();
      }
      return random;
    }

    this.setState((state) => ({
      contacts: [random, ...state.contacts]
    }));
  };
  
  render() {
    return (
      <>
      <h1>IronContacts</h1>
        <button onClick= {this.addContact}>Add Random Contact</button>
        <ContactList 
          contacts={this.state.contacts}
        />
      </>
    )
  }
}

export default App;