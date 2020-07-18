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

  sortByName = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sorted
    });
  };

  sortByPopularity = () => {
    const sorted = this.state.contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: sorted
    });
  };

  deleteContact = id =>{
    this.setState((state) => ({
      contacts: state.contacts.filter(contact => contact.id !== id)
    }))
  }
  

  render() {
    return (
      <>
      <h1>IronContacts</h1>
        <button onClick= {this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <ContactList 
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </>
    )
  }
}

export default App;