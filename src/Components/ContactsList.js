import React, { Component } from 'react';
import { DetailContact } from './DetailContact';
import contacts from '../contacts.json';

class ContactsList extends Component {
  state = { fiveContacts: contacts.slice(0, 5) };

  handleRandom = () => {
    let random;
    let inList = true;
    while (inList) {
      random = contacts[Math.floor(Math.random() * contacts.length)];
      inList = false;
      for (let i = 0; i < this.state.fiveContacts.length; i++) {
        if (this.state.fiveContacts[i].name === random.name) {
          inList = true;
        }
      }
    }
    this.setState({
      fiveContacts: [random, ...this.state.fiveContacts],
    });
  };

  renderContactList = () => {
    return this.state.fiveContacts.map((contact, i) => {
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
        <button onClick={this.handleRandom}>add a random contact</button>
        {this.renderContactList()}
      </div>
    );
  }
}

export default ContactsList;
