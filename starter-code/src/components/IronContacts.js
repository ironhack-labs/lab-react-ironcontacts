import React, { Component } from "react";
import contacts from "../contacts.json";
import "./IronContacts.css";
import Button from "react-bootstrap/Button";

class IronContacts extends Component {
  constructor(props) {
    super(props);
    const limit = 4;
    this.state = {
      contactArray: contacts.slice(0, limit)
    };
  }

  addContact() {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactList = this.state.contactArray;
    contactList.push(newContact);
    this.setState({
      contactArray: contactList
    });
  }

  sortByName() {
    const contactList = this.state.contactArray;
    contactList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contactArray: contactList
    });
  }

  sortByPopularity() {
    const contactList = this.state.contactArray;
    contactList.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contactArray: contactList
    });
  }

  deleteContact(contactIndex) {
    const contacts = this.state.contactArray;

    contacts.splice(contactIndex, 1);

    this.setState({ contactArray: contacts });
  }

  render() {
    const { contactArray } = this.state;
    return (
      <div className="IronContacts">
        <h1>IronContacts</h1>
        <span className="top-button">
          <Button variant="warning" onClick={() => this.sortByName()}>
            Sort by Name
          </Button>
          <Button variant="warning" onClick={() => this.sortByPopularity()}>
            Sort by Popularity
          </Button>
        </span>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {contactArray.map((oneContact, index) => {
            return (
              <tbody key={oneContact.name}>
                <tr>
                  <td>
                    <img src={oneContact.pictureUrl} alt="{oneContact.name}" />
                  </td>
                  <td>{oneContact.name}</td>
                  <td>{oneContact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <Button variant="success" onClick={() => this.addContact()}>
          Add a new Contact
        </Button>
      </div>
    );
  }
}

export default IronContacts;
