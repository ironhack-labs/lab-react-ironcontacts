import React, { Component } from "react";

import "./Ironcontacts.css";
import contacts from "../contacts.json";

class Ironcontacts extends Component {
  constructor(props) {
    super(props);
    this.state = { contactsArray: contacts };
  }

  addContact() {
    const newContact = prompt("Animal Name?");

    // update the array
    const contact = this.state.contactsArray;
    contact.push(newContact);

    // setState() to tell React to changen the DOM);
    this.setState({ contactsArray: contact });
  }

  randomContact() {
    const randomIndex = Math.floor(Math.random() * contactsArray.length);
    this.addContact(contactsArray[randomIndex]);
  }

  render() {
    const { contactsArray } = this.state;

    return (
      <section className="Ironcontacts">
        <button onClick={() => this.addContact()}>Add Random Contact</button>

        <table>
          <tr>
            <th className="column-width">Picture</th>
            <th className="column-width">Name</th>
            <th className="column-width">Popularity</th>
          </tr>
          {contactsArray.slice(0, 5).map(oneContact => {
            return (
              <tr key={oneContact}>
                <td>
                  <img className="picture" src={oneContact.pictureUrl} />
                </td>
                <td>
                  <p>{oneContact.name}</p>
                </td>
                <td>
                  <p>{oneContact.popularity}</p>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    );
  }
}

export default Ironcontacts;
