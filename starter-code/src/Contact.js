import React, { Component } from "react";

import allContacts from "./contacts.json";

class ContactList extends Component {
  state = {
    contactArray: allContacts.splice(0, 5)
  };

  randomContact() {
    // get old array
    const contacts = this.state.contactArray;

    // change it
    const RandomIndex = Math.floor(Math.random() * allContacts.length);
    contacts.push(allContacts[RandomIndex]);

    // update it
    this.setState({ contactArray: contacts });
  }

  sortedByName() {
    const contacts = this.state.contactArray;
    contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return;
      }
    });
    // contacts.sort();
    this.setState({ contactArray: contacts });
  }

  sortedByPopularity() {
    const contacts = this.state.contactArray;
    contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ contactArray: contacts });
  }

  render() {
    const { contactArray } = this.state;
    console.log(contactArray);

    return (
      <section className="ContactList">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortedByName()}>Sort By Name</button>
        <button onClick={() => this.sortedByPopularity()}>
          Sort by Popularity
        </button>
        <ul>
          {contactArray.map((oneContact, index) => {
            return (
              <li key={oneContact.name}>
                <img src={oneContact.pictureUrl} />
                <h3>{oneContact.name}</h3>
                <p>{oneContact.popularity}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ContactList;
