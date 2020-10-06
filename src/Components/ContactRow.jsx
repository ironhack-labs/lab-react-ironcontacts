import React, { Component } from 'react';
import contacts from '../contacts.json';
import '../style/ContactRow.css';

export default class ContactRow extends Component {
  state = {
    contacts: [...contacts].slice(0, 5),
  };

  addOneContact() {
    let num = Math.floor(Math.random() * contacts.length);
    let newContactList = [...this.state.contacts];
    newContactList.includes(contacts[num])
      ? this.addOneContact()
      : newContactList.push(contacts[num]);
    this.setState({
      contacts: newContactList,
    });
  }

  sortByName() {
    let sortedContactList = [...this.state.contacts];
    sortedContactList.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sortedContactList,
    });
  }

  sortByPopularity() {
    let sortedContactList = [...this.state.contacts];
    sortedContactList.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: sortedContactList,
    });
  }

  deleteContact(id) {
    this.setState({
        contacts: this.state.contacts.filter(contact => {
        return contact.id !== id;
      }),
    });
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.addOneContact()}>
            Add a random contact
          </button>
          <button onClick={() => this.sortByName()}>Sort by Name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by Popularity
          </button>
        </div>

        <table className="contact-list">
          <tbody>
            <tr className="category-titles">
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
            {contacts.map((contact) => (
              <tr key={contact.id} className="contact-infos">
                <td>
                  <img
                    className="contactImg"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>
                  <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
