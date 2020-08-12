import React, { Component } from 'react';
import { DetailContact } from './DetailContact';
import contacts from '../contacts.json';

class ContactsList extends Component {
  state = { renderContacts: contacts.slice(0, 5) };

  handleRandom = () => {
    let random;
    let inList = true;
    while (inList) {
      random = contacts[Math.floor(Math.random() * contacts.length)];
      inList = false;
      for (let i = 0; i < this.state.renderContacts.length; i++) {
        if (this.state.renderContacts[i].name === random.name) {
          inList = true;
        }
      }
    }
    this.setState({
      renderContacts: [random, ...this.state.renderContacts],
    });
  };

  handleSortByName = () => {
    let sortedNames = this.state.renderContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log(sortedNames);

    this.setState({
      renderContacts: sortedNames,
    });
  };

  handleSortByPopularity = () => {
    let sortedNames = this.state.renderContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });
    console.log(sortedNames);

    this.setState({
      renderContacts: sortedNames,
    });
  };

  renderContactList = () => {
    return this.state.renderContacts.map((contact, i) => {
      return (
        <DetailContact
          key={i}
          name={contact.name}
          pictureUrl={contact.pictureUrl}
          popularity={contact.popularity}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleRandom}>add a random contact</button>
        </div>
        <div>
          <button onClick={this.handleSortByName}>sort by name</button>
        </div>
        <div>
          <button onClick={this.handleSortByPopularity}>
            sort by popularity
          </button>
        </div>
        <div>
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
        </div>
        <div>{this.renderContactList()}</div>
      </div>
    );
  }
}

export default ContactsList;
