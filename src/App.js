import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList'
import contacts from './contacts.json'

class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  };

  addContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    if (this.state.contacts.find(contact => contact.id === random.id)) {
      if (this.state.contacts.length < contacts.length) {
        this.addContact();
      }
      return;
    }

    this.setState({
      contacts: [random, ...this.state.contacts]
    });

  };

  sortByName = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sorted
    });
  };

  sortByPopularity = () => {
    const popular = [...this.state.contacts];
    popular.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: popular
    });
  };

  deleteContact = (index) => {
    const deleted = [...this.state.contacts]
    deleted.splice(index, 1);

    this.setState({
      contacts: deleted
    });
  };


  render() {
    return (
      <div>
        <h1>Ironcontacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />

      </div>
    );
  }
}

export default App;
