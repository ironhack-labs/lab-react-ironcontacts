import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import contactsData from './contacts.json';


class App extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsData.slice(0, 5) };
    console.log(this.state.contacts);
    this.addRandomContact = this.addRandomContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }
  render() {
    return (
        <Contacts
          artists={this.state.contacts}
          addRandomContact={this.addRandomContact}
          sortByName={this.sortByName}
          sortByPopularity={this.sortByPopularity}
          deleteContact={this.deleteContact}
        />
    );
  }

  addRandomContact() {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(
      contactsData[Math.floor(contactsData.length * Math.random())]
    );
    this.setState({
      contacts: contactsCopy
    });
  }

  sortByName() {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      contacts: contactsCopy
    });
  }
  sortByPopularity() {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) =>
      a.popularity > b.popularity ? 1 : b.popularity > a.popularity ? -1 : 0
    );
    this.setState({
      contacts: contactsCopy
    });
  }

  deleteContact(contactIndex) {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy
    });
  }
}

export default App;
