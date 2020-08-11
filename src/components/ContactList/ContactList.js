import React, { Component } from 'react';
import contacts from './../../contacts.json';
import { Contact } from './../Contact/Contact';
import { RandomButton } from './../Buttons/RandomButton';
import { SortByName } from '../Buttons/SortByName';
import { SortByPopu } from '../Buttons/SortByPopu';
export class ContactList extends Component {
  constructor() {
    super();
    this.state = { showFiveContacts: [...contacts].slice(0, 5) };
  }

  randomContacts = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    if (this.state.showFiveContacts.indexOf(randomContact) === -1) {
      this.setState({
        showFiveContacts: [...this.state.showFiveContacts, randomContact],
      });
    }
  };

  sortByName = () => {
    let sortedArr = this.state.showFiveContacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({
      showFiveContacts: sortedArr,
    });
  };

  sortByPopularity = () => {
    let sortedArr = this.state.showFiveContacts.sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({
      showFiveContacts: sortedArr,
    });
  };

  deleteContact = (contactId) => {
    const filtered = this.state.showFiveContacts.filter(
      (contact) => contact.id !== contactId
    );
    this.setState({
      showFiveContacts: filtered,
    });
  };

  render() {
    return (
      <div>
        <RandomButton onClick={this.randomContacts}>
          Add random contact
        </RandomButton>
        <SortByName onClick={this.sortByName}>Sort by name</SortByName>
        <SortByPopu onClick={this.sortByPopularity}>
          Sort by Popularity
        </SortByPopu>
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
            {this.state.showFiveContacts.map((contact) => {
              return (
                <Contact
                  key={contact.id}
                  {...contact}
                  onClick={() => this.deleteContact(contact.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
