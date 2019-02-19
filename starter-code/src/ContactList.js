import React, { Component } from "react";

import "./ContactList.css";

import contacts from "./contacts.json";

class ContactList extends Component {
  // use constructor() only when you need a state
  constructor(props) {
    super(props);

    // initial state of our component

    this.state = {
      contactArray: contacts.slice(0, 5)
    };
  }

  addContact() {
    const { contactArray } = this.state;
    const randomContact = Math.floor(Math.random() * contacts.length);
    //const newContact = randomContact;
    // update the arrays
    contactArray.push(contacts[randomContact]);
    // set.state() tells React to change the DOM
    this.setState({ contactArray });
  }
  sortNameContact() {
    const contactName = this.state.contactArray.name;
    contactName.sort();
    this.setState({ contactArray: contactName });
  }
  sortPopContact() {
    const contactPop = this.state.contactArray.popularity;
    contactPop.sort();
    this.setState({ contactArray: contactPop });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <div className="ContactList">
        <button onClick={() => this.addContact()}>Add Random Contact</button>
        <button onClick={() => this.sortNameContact()}>Sort by Name</button>
        <button onClick={() => this.sortPopContact()}>
          Sort by Popularity
        </button>
        {contactArray.map(oneContact => {
          return (
            <table key={oneContact} className="List">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
              <tr>
                <td>
                  <img src={oneContact.pictureUrl} />
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default ContactList;
