import React, { Component } from 'react';
import './ContactList.css';
import contacts from '../contacts.json';
import Contact from './Contact';

class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    allContacts: contacts,
    contacts: contacts.splice(0, 5),
  };

  clickHandler = () => {
    let randomNum = Math.floor(Math.random() * this.state.allContacts.length);
    let randomcontact = this.state.allContacts[randomNum];

    //copy contacts to temp array
    let contactsCopy = [...this.state.contacts];

    //add new contact to temp array
    contactsCopy.push(randomcontact);

    //set state with new contacts
    this.setState({
      contacts: contactsCopy,
    });
  };

  sortByNameHandler = () => {
    let sortedContacts = [...this.state.contacts].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    this.setState({
      contacts: sortedContacts,
    });
  };

  sortByPopularityHandler = () => {
    let sortedContacts = [...this.state.contacts].sort((a, b) =>
      b.popularity > a.popularity ? 1 : -1
    );

    this.setState({
      contacts: sortedContacts,
    });
  };

  render() {
    return (
      <div>
        <div className="buttons">
          <button onClick={this.clickHandler}>Add Random Contact</button>
          <button onClick={this.sortByNameHandler}>Sort by Name</button>
          <button onClick={this.sortByPopularityHandler}>
            Sort by popularity
          </button>
        </div>

        <table className="contactList">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contacts.map((contact, index) => (
            <Contact
              key={contact.key}
              name={contact.name}
              pictureUrl={contact.pictureUrl}
              popularity={contact.popularity}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default ContactList;
