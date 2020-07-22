import contacts from './../contacts.json';
import React, { Component } from 'react';

const firstFive = [];
for (let i = 0; i < contacts.length && i < 5; i++) {
  firstFive.push(contacts[i]);
}

console.log(firstFive);

export class ContactsFive extends Component {
  state = {
    contacts: firstFive,
  };

  addContact = () => {
    const newContacts = [...this.state.contacts];
    newContacts.push(
      contacts[Math.floor(Math.random() * (contacts.length - 1 - 5 + 1)) + 5]
    );
    this.setState({ contacts: newContacts });
  };

  handleDelete = (index) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== index),
    });
  };

  SortByName = () => {
    const contactsToSort = [...this.state.contacts];
    contactsToSort.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    this.setState({ contacts: contactsToSort });
  };

  SortByPopularity = () => {
    const contactsToSort = [...this.state.contacts];
    contactsToSort.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    this.setState({ contacts: contactsToSort });
  };
  render() {
    return (
      <div>
      <div className="btn-container">
        <button className="btn" onClick={this.addContact}>Add Random Contact</button>
        <button className="btn" onClick={this.SortByName}>Sort by Name</button>
        <button className="btn" onClick={this.SortByPopularity}>Sort by Popularity</button>
</div>
        <table className="contact-table">
          <thead >
            <tr>
              <th colSpan="4"> <h1>IronContacts</h1> </th>
            </tr>
            <tr>
              <th> <h2>Picture</h2></th>
              <th><h2>Name</h2></th>
              <th><h2>Popularity</h2></th>
              <th><h2>Delete</h2> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <tr className="one-person" key={contact.id}>
                <td>
                  <img
                    className="celeb"
                    src={contact.pictureUrl}
                    alt="awesome"
                  />
                </td>
                <td>{contact.name} </td>
                <td>{contact.popularity.toPrecision(4)}</td>
                <td>
                  <button className="delete-btn" onClick={(event) => this.handleDelete(contact.id)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsFive;
