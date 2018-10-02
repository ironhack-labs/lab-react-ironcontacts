import React, { Component } from "react";
import ContactRow from "./ContactRow";
import contacts from "../contacts.json";
import RandomButton from "./RandomButton";
import {randomIntFromInterval} from "../utils/math"

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

  render() {
      console.log(this.state.contactsDisplay)
    return (
      <div>
        <h1>Iron Contacts</h1>
        <button onClick={() => this.addRandom()}>Add a random contact</button>
        <table>
          <thead>
            <tr>
                <th key ="1">Picture</th>
                <th key ="2">Name</th>
                <th key ="3">Popularity</th>
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
