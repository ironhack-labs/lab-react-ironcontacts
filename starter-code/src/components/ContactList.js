import React, { Component } from "react";

import "./ContactList.css";

import contacts from "../contacts.json";

class ContactList extends Component {
  constructor(props) {
    super(props);

    const contactSample = [...contacts];
    contactSample.splice(5);

    this.state = {
      contactArray: contactSample
    };
  }

  addRandom() {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let contactList = this.state.contactArray;
    contactList.push(contacts[randomIndex]);
    this.setState({ contactArray: contactList });
  }

  sortByName() {
    let contactList = this.state.contactArray;
    let reorderedContactList = contactList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ contactArray: reorderedContactList });
  }

  sortByPopularity() {
    let contactList = this.state.contactArray;
    let reorderedContactList = contactList.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ contactArray: reorderedContactList });
  }

  deleteContact(contactIndex) {
    let contactList = this.state.contactArray;

    contactList.splice(contactIndex, 1);

    this.setState({ contactArray: contactList });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <section className="ContactList">
        <h2 className="title">IronContacts</h2>
        <button onClick={() => this.addRandom()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by popularity
        </button>

        <table id="contactTable" border="0">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactArray.map((oneContact, index) => {
              const trId = "actor-" + index;

              return (
                <tr id={trId}>
                  <td>
                    <img src={oneContact.pictureUrl} alt="default-img" />
                  </td>
                  <td>{oneContact.name}</td>
                  <td>{oneContact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}
export default ContactList;
