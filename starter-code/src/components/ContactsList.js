import React, { Component } from "react";
import contacts from "../contacts.json";

class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedContacts: contacts.slice(0, 5)
    };
  }

  addContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const displayedContactsCopy = [...this.state.displayedContacts];
    displayedContactsCopy.push(randomContact);
    this.setState({
      displayedContacts: displayedContactsCopy
    });
  };

  sortContact = () => {
    const sortArr = this.state.displayedContacts.sort((contact1, contact2) => {
      return contact1.name.localeCompare(contact2.name);
    });
    this.setState({
      displayedContacts: sortArr
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addContact}>Add random contact</button>
        <button onClick={this.sortContact}>Sort contact</button>

        <br />
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayedContacts.map(function(contact, index) {
              return (
                <tr key={index}>
                  <td>
                    <img className="contact-image" src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsList;
