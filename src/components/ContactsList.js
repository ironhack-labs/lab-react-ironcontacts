import React from 'react';
import reactDom from 'react-dom';
import contacts from '../contacts.json';
import Contact from './Contact';

class ContactsList extends React.Component {
  state = {
    contactList: contacts.slice(0, 5),
  };

  displayContacts = () => {
    return this.state.contactList.map((contact) => {
      return (
          <Contact {...contact} />
      );
    });
  };

  render() {
    return (
      <div>
        {this.displayContacts()}
      </div>
    );
  }
}

export default ContactsList;
