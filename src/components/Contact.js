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
      </tr>
    ));

    return (
      <div className="contact-list">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contactsList}
        </table>
      </div>
    );
  }
}

export default Contact;
