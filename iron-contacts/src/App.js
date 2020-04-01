import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    let contactList = [...contacts];
    let displayedContacts = contactList.splice(0, 5);
    this.state = {
      displayedContacts: displayedContacts,
    };
  }

  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    let contactsCopy = [...this.state.displayedContacts];
    contactsCopy.push(randomContact);
    this.setState({ displayedContacts: contactsCopy });
  };

  sortByName = () => {
    let sortedNames = this.state.displayedContacts.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      return nameA > nameB ? 1 : 0;
    });
    this.setState({ displayedContacts: sortedNames });
  };

  sortByPopularity = () => {
    let sortedPopularity = this.state.displayedContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ displayedContacts: sortedPopularity });
  };

  deleteContact = index => {
    let contactCopy = [...this.state.displayedContacts];
    contactCopy.splice(index, 1);
    this.setState({ displayedContacts: contactCopy });
  };

  render() {
    return (
      <div className="App">
        <div className="contacts">
          <h1>IronContacts</h1>
          <div className="contacts-btns">
            <button className="contact-btn" onClick={this.addRandomContact}>
              Add random contact
            </button>
            <button className="contact-btn" onClick={this.sortByName}>
              Sort by name
            </button>
            <button className="contact-btn" onClick={this.sortByPopularity}>
              Sort by popularity
            </button>
          </div>
          <Contacts
            contacts={this.state.displayedContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
