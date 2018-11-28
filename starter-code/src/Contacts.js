import React, { Component } from "react";

import contacts from "./contacts.json";

import "./Contacts.css";

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
        listContacts: contacts.slice(0,5)
    };
  }

  addContacts() {
    const { listContacts } = this.state;

    const randomIndex = Math.floor(Math.random() * contacts.length);
    listContacts.push(contacts[randomIndex]);

    // tell React to update the DOM with setState()
    this.setState({ listContacts });


  }

  render() {
    const { listContacts } = this.state;

    // map over the array of strings to get "animalis" (an array of <li> tags)
    const contactsTr = listContacts.map((oneContact, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={oneContact.pictureUrl} alt="contact-image" />
          </td>
          <td>{oneContact.name}</td>
          <td>{oneContact.popularity}</td>
        </tr>
      );
    });

    return (
      <div>
        <button onClick={() => this.addContacts()} >Add Random Contact</button>
        <table className="table">
          <tr>
            <th>Picture</th>
            <th>name</th>
            <th>popularity</th>
          </tr>
          <tr>{contactsTr}</tr>
        </table>
      </div>
    );
  }
}

export default Contacts;
