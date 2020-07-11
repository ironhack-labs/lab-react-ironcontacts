import React, { Component } from 'react';
import contacts from '../contacts.json';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { contactList: contacts.slice(0, 5) };
  }

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
