import React, { Component } from "react";
import "./ContactsList.css";
import ContactCard from "../ContactCard/ContactCard";

class ContactsList extends Component {
  state = {
    contacts: [
      this.props.contacts[0],
      this.props.contacts[1],
      this.props.contacts[2],
      this.props.contacts[3],
      this.props.contacts[4],
    ],
  };

  deleteContactHandler = (id) => {
    const contactsCopy = [...this.state.contacts];
    const contactIndexToDelete = contactsCopy.findIndex(
      (contact) => contact.id === id
    );
    contactsCopy.splice(contactIndexToDelete, 1);
    this.setState({
      contacts: contactsCopy,
    });
  };

  addRandomContactHandler = () => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(
      this.props.contacts[
        Math.floor(Math.random() * this.props.contacts.length)
      ]
    );
    this.setState({
      contacts: contactsCopy,
    });
  };

  sortContacts = (attribute) => {
    const contactsCopy = [...this.state.contacts].sort((a, b) => {
      if (a[attribute] === b[attribute]) return 0;
      return a[attribute] > b[attribute] ? -1 : 1;
    });
    if (attribute === "name") contactsCopy.reverse();
    this.setState({
      contacts: contactsCopy,
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <ContactCard
                  key={contact.id}
                  {...contact}
                  clickToDelete={() => this.deleteContactHandler(contact.id)}
                />
              );
            })}
          </tbody>
        </table>
        <button onClick={this.addRandomContactHandler}>
          Add Random Contact
        </button>

        <button onClick={() => this.sortContacts("name")}>Sort By Name</button>
        <button onClick={() => this.sortContacts("popularity")}>
          Sort By Popularity
        </button>
      </div>
    );
  }
}

export default ContactsList;
