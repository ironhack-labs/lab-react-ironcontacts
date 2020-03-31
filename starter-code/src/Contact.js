import React, { Component } from 'react';
import contacts from './contacts.json';
import Card from './Card';

class Contact extends Component {
  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
    contacts: contacts.slice(0, 5),
    random: contacts[Math.floor(Math.random() * contacts.length)],
  };

  randomContact = () => {
    let contactsCopy = [...this.state.contacts];
    contactsCopy.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({ contacts: contactsCopy });
  };

  render() {
    return this.state.contacts.map(contact => {
      <div className="contact-container">
        <button onClick={this.randomContact}>Add Random Contact!</button>
        <Card
          pictureUrl={contact.pictureUrl}
          name={contact.name}
          popularity={contact.popularity}
        />
      </div>;
    });
  }
}

export default Contact;
