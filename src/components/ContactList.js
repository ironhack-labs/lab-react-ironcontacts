import React, { Component } from 'react';
import contactsFromJSON from '../contacts.json';
import Contacts from './Contacts';

class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contactsFromJSON].splice(0, 5), //
    };
  }

  addContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsFromJSON.length);
    const newContacts = [...this.state.contacts];
    const randomContact = contactsFromJSON[randomIndex];
    newContacts.push(randomContact);
    this.setState({ contacts: newContacts });
  };

  sortName = () => {
    const newContacts = [...this.state.contacts];
    newContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ contacts: newContacts });
  };

  sortPopularity = () => {
    const newContacts = [...this.state.contacts];
    newContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({ contacts: newContacts });
  };

  deleteContact = (id) => {
    const removeContact = this.state.contacts.filter(
      (contactId) => contactId.id !== id
    );
    this.setState({ contacts: removeContact });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.addContact}>Random</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPopularity}>Sort by Popularity</button>
        </div>
        <Contacts
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default ContactList;
