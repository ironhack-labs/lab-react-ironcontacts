import React, { Component } from "react";
import "./ContactList.css";
import contacts from "../contacts.json";

class ContactList extends Component {
  constructor(props) {
    super(props);

    // initial state for ONLY when you need state
    this.state = {
      contactArray: contacts.filter(oneContact => {
        return contacts.indexOf(oneContact) <= 4;
      })
    };
  }

  addRandomContact() {
    const shortlist = this.state.contactArray;
    const randomIndex = Math.floor(Math.random() * contacts.length);
    shortlist.push(contacts[randomIndex]);
    this.setState({ contactArray: shortlist });
  }

  sortByName() {
    const namelist = this.state.contactArray;
    namelist.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ contactArray: namelist });
  }

  deleteContact(index) {
    const deletelist = this.state.contactArray;
    deletelist.splice(index, 1);

    this.setState({ contactArray: deletelist });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <section className="ContactList">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add a Random Contact
        </button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by Popularity
        </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action(s)</th>
          </tr>
          {contactArray.map((oneContact, index) => {
            return (
              <tr key={oneContact.pictureUrl}>
                <td>
                  <img
                    width="20%"
                    height="auto"
                    src={oneContact.pictureUrl}
                    alt={oneContact.name}
                  />
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
        </table>
      </section>
    );
  }
}

export default ContactList;
