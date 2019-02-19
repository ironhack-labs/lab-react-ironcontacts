import React, { Component } from "react";

import contacts from "../contacts.json";

import "./contactsList.css";
import Table from "react-bootstrap/Table";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = { contactArray: contacts.slice(0, 5) };
  }
  addContact() {
    const { contactArray } = this.state;
    const newContact = Math.floor(Math.random() * contacts.length);
    contactArray.push(contacts[newContact]);

    this.setState({ contactArray });
  }
  orderContact() {
    const { contactArray } = this.state;
    const sortContact = contactArray.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ contactArray: sortContact });
  }

  popContact() {
    const { contactArray } = this.state;
    const popContact = contactArray.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ contactArray: popContact });
  }
  render() {
    const { contactArray } = this.state;

    return (
      <div className="ContactList">
        <button onClick={() => this.addContact()}>Add Contact</button>
        <button onClick={() => this.orderContact()}>Sort By Name</button>
        <button onClick={() => this.popContact()}>Sort By Popularity</button>
        <Table className="table">
          <tr>
            <td className="head">Name</td>
            <td className="head">Picture</td>
            <td className="head">Popularity</td>
          </tr>

          <tbody>
            {contactArray.map(oneContact => {
              return (
                <tr className="row">
                  <td key={oneContact.name} className="test">
                    {oneContact.name}
                  </td>
                  <td key={oneContact.pictureUrl} className="test">
                    <img src={oneContact.pictureUrl} alt="picture" />
                  </td>
                  <td className="test" key={oneContact.popularity}>
                    {oneContact.popularity}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div />
      </div>
    );
  }
}

export default ContactList;
