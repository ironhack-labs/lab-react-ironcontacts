import React, { Component } from "react";
import data from "../contacts.json";

export class SortContacts extends Component {
  state = {
    contacts: data,
    sort: false,
  };

  contactsEventSort = (event) => {
    this.setState({ sort: !this.state.sort });
  };

  contactsSort = () => {
    if (this.state.sort) {
      return [...this.state.contacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      return this.state.contacts;
    }
  };

  contactEventsReset = () => {
    this.setState({ contacts: data });
  };

  render() {
    return (
      <div>
        <button onClick={this.contactsEventSort}>Sort</button>
        {this.contactsSort().map((contact, index) => (
          <p key={index}>{contact.name}</p>
        ))}
      </div>
    );
  }
}

export default SortContacts;
