import React, { Component } from 'react';
import contacts from '../contacts.json';
import ContactCard from './ContactCard';

class ContactsList extends Component {
  state = {
    contactsList: contacts.splice(0, 5),
  };

  addRandomContact = () => {
    let pickRandomContact =
      contacts[Math.floor(Math.random() * contacts.length)];

    if (this.state.contactsList.includes(pickRandomContact)) {
      pickRandomContact();
    }

    this.setState({
      contactsList: [...this.state.contactsList, pickRandomContact],
    });
  };

  sortByName = () => {
    let sortedArr = this.state.contactsList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState({
      contactsList: sortedArr,
    });
  };

  sortByPopu = () => {
    let sortedArr = this.state.contactsList.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState({
      contactsList: sortedArr,
    });
  };

  deleteContactHandler = (contactIndex) => {
    const filtered = this.state.contactsList.filter(
      (contact) => contact.id !== contactIndex
    );
    this.setState({
      contactsList: filtered,
    });
  };

  render() {
    return (
      <>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopu}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((oneContact) => {
              return (
                <ContactCard
                  key={oneContact.id}
                  {...oneContact}
                  clickToDelete={() => this.deleteContactHandler(oneContact.id)}
                />
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ContactsList;
