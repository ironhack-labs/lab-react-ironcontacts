import React, { Component } from 'react';
import contacts from '../contacts.json';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { contactList: contacts.slice(0, 5) };
  }

  addContact = () => {
    const contactsCopy = [...this.state.contactList];
    const randomContact =
      contacts[Math.floor(Math.random() * (contacts.length - 1 - 4)) + 4];
    contactsCopy.push(randomContact);
    this.setState({
      contactList: contactsCopy,
    });
  };

  sortContactsByName = () => {
    const contactsCopy = [...this.state.contactList];
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contactList: contactsCopy,
    });
  };

  sortContactsByPopularity = () => {
    const contactsCopy = [...this.state.contactList];
    contactsCopy.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      contactList: contactsCopy,
    });
  };

  deleteContact = (id) => {
    const contactsCopy = [...this.state.contactList];
    const contactIndex = contactsCopy.findIndex((person) => person.id === id);
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contactList: contactsCopy,
    });
  };

  render() {
    const contactsList = this.state.contactList.map((person) => (
      <tr key={person.id}>
        <td>
          <img className="table-img" src={person.pictureUrl} alt="famous" />
        </td>
        <td>
          <p>{person.name}</p>
        </td>
        <td>
          <p>{person.popularity.toFixed(2)}</p>
        </td>
        <td>
          <button onClick={() => this.deleteContact(person.id)}>Delete</button>
        </td>
      </tr>
    ));

    return (
      <div className="contact-list">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortContactsByName}>Sort by name</button>
        <button onClick={this.sortContactsByPopularity}>
          Sort by Popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{contactsList}</tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
