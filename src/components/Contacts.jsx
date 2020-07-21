import React, { Component } from 'react';
import contacts from '../contacts.json';

export class Contacts extends Component {
  state = {
    contactList: contacts.splice(0, 5),
  };

  roundNb = (nb) => {
    return nb.toFixed(2);
  };

  randomNb = (nb) => {
    return Math.floor(Math.random() * nb);
  };

  addContact = () => {
    const randomIndex = this.randomNb(contacts.length);

    const newContactList = [...this.state.contactList];

    newContactList.push({
      name: contacts[randomIndex].name,
      pictureUrl: contacts[randomIndex].pictureUrl,
      popularity: contacts[randomIndex].popularity,
    });

    this.setState({ contactList: newContactList });
  };

  sortName = () => {
    const newContactList = [...this.state.contactList];

    newContactList.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })

    this.setState({ contactList: newContactList });
  };

  sortPopularity = () => {
    const newContactList = [...this.state.contactList];

    newContactList.sort(function (a, b) {
      return b.popularity - a.popularity;
    })

    this.setState({ contactList: newContactList });
  };

  handleDelete = (i) => {
    const newContactList = [...this.state.contactList];

    newContactList.splice(i,1);

    this.setState({ contactList: newContactList });
  }

  render() {
    return (
      <div>
        <h1>IronContacts </h1>
        <button onClick={(event) => this.addContact()}>
          Add random contact
        </button>
        <button onClick={(event) => this.sortName()}>
          Sort by name
        </button>
        <button onClick={(event) => this.sortPopularity()}>
          Sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contact, i) => (
              <tr key={i}>
                <td>{contact.name}</td>
                <td>
                  <img
                    style={{ width: '50px' }}
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{this.roundNb(contact.popularity)}</td>
                <button onClick={(event) => this.handleDelete(i)}>
              Delete actor
            </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
