import React, { Component } from "react";
import ContactRow from "./ContactRow";
import contacts from "../contacts.json";
import RandomButton from "./RandomButton";
import { randomIntFromInterval } from "../utils/math";

let contactsDisplay = [];
for (let i = 0; i < 5; i++) {
  contactsDisplay.push(contacts[i]);
}

class TableContacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsDisplay
    };
  }

  addRandom() {
    let randomIndex = contacts[randomIntFromInterval(0, contacts.length - 1)];

    this.setState({
      contactsDisplay: this.state.contacts.push(randomIndex)
    });
  }

  sortContactsName() {
    let sortedByName = this.state.contacts.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

    this.setState({
        contactsDisplay: sortedByName
    })
  }
  sortContactsPopularity() {
    let sortedByPopularity = this.state.contacts.sort(function (a, b) {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      });

    this.setState({
        contactsDisplay: sortedByPopularity
    })
  }

  render() {
    console.log(this.state.contactsDisplay);
    return (
      <div>
        <h1>Iron Contacts</h1>
        <div>
          <button onClick={() => this.addRandom()}>Add a random contact</button>
          <button onClick={() => this.sortContactsName()}>Sort by name</button>
          <button onClick={() => this.sortContactsPopularity()}>
            Sort by popularity
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th key="1">Picture</th>
              <th key="2">Name</th>
              <th key="3">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((e, i) => (
              <ContactRow
                key={e.name}
                name={e.name}
                pictureUrl={e.pictureUrl}
                popularity={e.popularity}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContacts;
