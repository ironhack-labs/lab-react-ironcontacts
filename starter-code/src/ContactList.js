import React, { Component } from "react";
import contactsArray from "./contacts.json";
class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contactsArray.slice(0, 5)
    };
  }

  addContacts() {
    const { contacts } = this.state;
    const randomContactIndex = Math.floor(Math.random() * contactsArray.length);
    contacts.push(contactsArray[randomContactIndex]);
    this.setState({ contacts });
  }

  removeContact(contactsIndex) {
    const { contacts } = this.state;
    contacts.splice(contactsIndex, 1);
    this.setState({ contacts });
  }

  sortName() {
    const { contacts } = this.state;
    contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(contacts);
    this.setState({ contacts });
  }
  sortPopularity() {
    const { contacts } = this.state;
    contacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ contacts });
  }
  render() {
    const { contacts } = this.state;

    const contactsHtml = contacts.map((oneContact, index) => {
      return (
        <table key={index}>
          <tr>
            <th>
              <img src={oneContact.pictureUrl} alt="" />
            </th>
            <th>{oneContact.name}</th>
            <th>
              <h4>{oneContact.popularity}</h4>
            </th>
            <th>
              <button onClick={() => this.removeContact(index)}>Delete</button>
            </th>
          </tr>
        </table>
      );
    });
    return (
      <section className="ContactList">
        <h2>Contact List COmponent</h2>
        <button onClick={() => this.addContacts()}>Add Random</button>
        <button onClick={() => this.sortName()}>Sort Name</button>
        <button onClick={() => this.sortPopularity()}>Sort Popularity</button>
        <ul>{contactsHtml}</ul>
      </section>
    );
  }
}

export default ContactList;
