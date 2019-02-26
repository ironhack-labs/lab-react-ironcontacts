import React, { Component } from "react";
import contacts from "../contacts.json";
import "./IronContacts.css";

class IronContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactArray: contacts.slice(0, 5)
    };
  }

  addContact() {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactArrayCopy = [...this.state.contactArray];
    contactArrayCopy.push(newContact);
    this.setState({ contactArray: contactArrayCopy });
  }

  sortByName() {
    const contactArrayCopy = [...this.state.contactArray];
    contactArrayCopy.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contactArray: contactArrayCopy });
  }

  sortByPopularity() {
    const contactArrayCopy = [...this.state.contactArray];
    contactArrayCopy.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({ contactArray: contactArrayCopy });
  }

  remove(index) {
    const contactArrayCopy = [...this.state.contactArray];
    contactArrayCopy.splice(index, 1);
    this.setState({ contactArray: contactArrayCopy });
  }

  render() {
    return (
      <div className="IronContacts">
        <h1>IronContacts</h1>
        <button onClick={() => this.addContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort By Popularity
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
            {this.state.contactArray.map((contact, index) => (
              <tr>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.remove(index)}>Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default IronContacts;
