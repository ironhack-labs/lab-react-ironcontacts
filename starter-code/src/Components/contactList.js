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
      return a.popularity - b.popularity;
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
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contactArray.map(oneContact => {
              return (
                <tr className="row">
                  <td key={oneContact.name}>{oneContact.name}</td>
                  <td key={oneContact.pictureUrl}>
                    <img src={oneContact.pictureUrl} alt="picture" />
                  </td>
                  <td key={oneContact.popularity}>{oneContact.popularity}</td>
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
