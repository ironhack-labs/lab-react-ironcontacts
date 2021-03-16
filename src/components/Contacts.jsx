import React, { Component } from "react";
import contactsJSON from "./../contacts.json";
import "./../styles/Contacts.css";

class Contacts extends Component {
  state = {
    contactsList: contactsJSON.splice(0, 5),
  };

  handleRandom = () => {
    const randomIndex = Math.floor(
      Math.random() * Math.floor(contactsJSON.length)
    );
    const randomContact = contactsJSON[randomIndex];
    console.log(randomContact);
    this.setState({
      contactsList: [randomContact, ...this.state.contactsList],
    });
  };

  handleName = () => {
    const copyContact = [...this.state.contactsList];
    copyContact.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contactsList: copyContact,
    });
  };

  handlePopularity = () => {
    const copyContact = [...this.state.contactsList];
    copyContact.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contactsList: copyContact,
    });
  };

  handleDelete = (contactId) => {
    const copyContact = [...this.state.contactsList];
    copyContact.splice(contactId, 1);

    this.setState({
      contactsList: copyContact,
    });
  };

  render() {
    return (
      <div className="Contacts">
        <h3>Contacts</h3>
        <button onClick={this.handleRandom}>Add Random Contact</button>
        <button onClick={this.handleName}>Sort by name</button>
        <button onClick={this.handlePopularity}>Sort by popularity</button>
        <table>
          <tbody>
            {this.state.contactsList.map((contact, index) => (
              <tr key={index} className="contact-card">
                <td>
                  <img src={contact.pictureUrl} alt="avatar" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
