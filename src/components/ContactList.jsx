import React, { Component } from 'react';
import ContactCard from './ContactCard';
import contacts from '../contacts.json';

class ContactList extends Component {
  state = {
    contactsToDisplay: contacts.slice(0, 4),
  };

  loadRandContact = event => {
    if (this.state.contactsToDisplay.length === contacts.length) {
      window.alert('There are no more contacts to display');
      return;
    }

    let randContact;
    do {
      const randIndex = Math.floor(Math.random() * contacts.length);
      randContact = contacts[randIndex];
    } while (this.state.contactsToDisplay.includes(randContact));

    this.setState({
      contactsToDisplay: [randContact, ...this.state.contactsToDisplay],
    });
  };

  sortByPopularity = event => {
    const sortedContacts = this.state.contactsToDisplay.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      contactsToDisplay: sortedContacts
    });
  };

  sortByName = event => {
    const sortedContacts = this.state.contactsToDisplay.sort((a, b) => {
      return (a.name < b.name) ? -1 : 1;
    });

    this.setState({
      contactsToDisplay: sortedContacts
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <h1>Iron Contacts</h1>
        <main className="ContactList">
          <button onClick={this.loadRandContact}>Add Random Contact</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <div className="ContactList__titles">
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
          </div>

          {this.state.contactsToDisplay.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))}
        </main>
      </div>
    );
  }
}

export default ContactList;
