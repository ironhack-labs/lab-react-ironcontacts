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
          <Contact {...contact} key={contact.id}/>
      );
    });
  };

  addContact = () => {
      const arrayCopy = [...this.state.contactList];
      arrayCopy.push(contacts[Math.floor(Math.random()*contacts.length)])

      this.setState({contactList: arrayCopy})
  }

  render() {
    return (
      <div>
        {this.displayContacts()}
        <button onClick={() => this.addContact()}>Add random contact</button>
      </div>
      
    );
  }
}

export default ContactsList;
