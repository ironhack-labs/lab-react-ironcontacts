import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./Contacts";

class App extends Component {
  state = {
    contactList: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    let availableContacts = contacts.filter((contact) => {
      let available = true;
      this.state.contactList.forEach((oneContact) => {
        if (oneContact.name === contact.name) {
          available = false;
        }
      });
      return available;
    });

    let randomIndex = Math.floor(Math.random() * availableContacts.length);
    let randomContact = availableContacts[randomIndex];
    let newContactList = this.state.contactList;
    newContactList.push(randomContact);

    this.setState({
      contactList: newContactList,
    });
  };

  sortByName = () => {
    let sortedContactList = this.state.contactList.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });

    this.setState({
      contactList: sortedContactList,
    });
  };

  sortByPopularity = () => {
    let sortedContactList = this.state.contactList.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      else if (a.popularity < b.popularity) return 1;
      else return 0;
    });

    this.setState({
      contactList: sortedContactList,
    });
  };

  deleteContact = (contactId) => {
    let filteredContactList = this.state.contactList.filter((contact) => {
      return contact.id !== contactId;
    });

    this.setState({
      contactList: filteredContactList,
    });
  };

  render() {
    const contactsToDisplay = this.state.contactList.map((contact) => {
      return (
        <Contacts
          key={contact.id}
          {...contact}
          deleteButton={() => this.deleteContact(contact.id)}
        />
      );
    });

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add random contact
        </button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by popularity
        </button>

        <table>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
          <tbody>{contactsToDisplay}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
