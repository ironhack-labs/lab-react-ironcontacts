import React, { Component } from "react";
import contacts from "./contacts.json";
import "./ContactList.css";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = { contactArray: contacts };
  }

  addContact() {
    const newImage = prompt("Image?");
    const newName = prompt("Name?");
    const newPopularity = prompt("Popularity?");

    const contacts = this.state.contactArray;

    const newContact = {
      pictureUrl: newImage,
      name: newName,
      popularity: newPopularity
    };
    contacts.push(newContact);

    this.setState({ contactArray: contacts });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <table className="ContactList">
        <button onClick={() => this.addContact()}>Add Random Contact</button>

        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactArray
          .filter((i, index) => index < 5)
          .map((oneContact, index) => {
            return (
              <tr key={oneContact.pictureUrl}>
                <td>
                  <img src={oneContact.pictureUrl} alt="mypicture" />
                </td>

                <td>{oneContact.name}</td>

                <td>{oneContact.popularity}</td>
              </tr>
            );
          })}
      </table>
    );
  }
}

export default ContactList;
