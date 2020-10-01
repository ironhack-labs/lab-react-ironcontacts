import React, { Component } from 'react';
import ContactCard from './ContactCard';
import contacts from '../contacts.json';
import '../stylesheets/ContactList.css';

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
    const sortedContacts = this.state.contactsToDisplay.sort((a, b) => b.popularity - a.popularity);
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

  deleteContact = event => {
    const contactId = event.target.value;
    const newContacts = this.state.contactsToDisplay.filter(contact => contact.id !== contactId);

    this.setState({
      contactsToDisplay: newContacts
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        <h1>Iron Contacts</h1>
        <main className="ContactList">
          <div className="ContactList__buttons">
            <button className="ContactList__button" onClick={this.loadRandContact}>Add Random Contact</button>
            <button className="ContactList__button" onClick={this.sortByName}>Sort by Name</button>
            <button className="ContactList__button" onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
          <div className="ContactList__titles">
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
            <h2>Actions</h2>
          </div>

          {this.state.contactsToDisplay.map((contact) => (
            <ContactCard contact={contact} deleteHandler={this.deleteContact} key={contact.id}/>
          ))}
        </main>
      </div>
    );
  }
}

export default ContactList;
