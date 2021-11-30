import React, { Component } from "react";
import contacts from "../../contacts.json";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts],
      contactsFiltered: [],
    };
  }

  componentDidMount = () =>
    this.setState({ contactsFiltered: this.state.contacts.splice(0, 5) });

  shortContactsByName() {
    const copy = [...this.state.contactsFiltered];
    let sortedContacts = copy.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({
      contactsFiltered: sortedContacts,
    });
  }

  shortContactsByPopularity() {
    const copy = [...this.state.contactsFiltered];
    let sortedContacts = copy.sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      if (a.popularity > b.popularity) return -1;
      return 0;
    });
    this.setState({
      contactsFiltered: sortedContacts,
    });
  }

  addContact() {
    const copy = [...this.state.contactsFiltered];
    const random = Math.floor(Math.random() * this.state.contacts.length);
    copy.push(this.state.contacts[random]);
    this.state.contacts.splice(random, 1);
    this.setState({
      contactsFiltered: copy,
    });
  }
  removeContact(contactID) {
    const copy = [...this.state.contactsFiltered];
    const newContacts = copy.filter((contact) => contact.id !== contactID);

    this.setState({
      contactsFiltered: newContacts,
    });
  }
  render() {
    return (
      <div className="List">
        <div className="ButtonPanel">
          <button onClick={() => this.addContact()}>
            Add a random contact
          </button>
          <button onClick={() => this.shortContactsByName()}>
            Shot by name
          </button>
          <button onClick={() => this.shortContactsByPopularity()}>
            Shot by popularity
          </button>
        </div>
        {this.state.contactsFiltered.map((eachContacts) => (
          <ContactCard
            key={eachContacts._id}
            {...eachContacts}
            removeContact={() => this.removeContact(eachContacts.id)}
          ></ContactCard>
        ))}
      </div>
    );
  }
}
