import React, { Component } from "react";
import contacts from "./contacts.json";

export default class Table extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  randomSelect() {
    return contacts.slice(5)[Math.floor(Math.random() * contacts.length)];
  }

  addContact() {
    const copy = [...this.state.contacts];
    copy.push(this.randomSelect());
    this.setState({ contacts: copy });
  }

  sortByName() {
    const copy = [...this.state.contacts];
    copy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else return -1;
    });
    this.setState({ contacts: copy });
  }

  sortByPopularity() {
    const copy = [...this.state.contacts];
    copy.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else return -1;
    });
    this.setState({ contacts: copy });
  }

  deleteContact(i) {
    const copy = [...this.state.contacts];
    copy.splice(i, 1);
    this.setState({ contacts: copy });
  }

  render() {
    // const contactsArr = this.state.contacts.slice(0,5);
    return (
      <div>
        <button onClick={() => this.addContact()}>Add a contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by popylarity
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
          <tbody>
            {this.state.contacts.map((contact, i) => (
              <tr key={i}>
                <td>
                  <img
                    className="contactPic"
                    src={contact.pictureUrl}
                    alt="/"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
