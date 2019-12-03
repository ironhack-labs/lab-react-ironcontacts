import React, { Component } from "react";
import contacts from "../contacts.json";
import ContactsCard from "../components/ContactsCard";

const contact = contacts.splice(0, 5);

class List extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contact
    };
    this.addContact = this.addContact.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortPopularity = this.sortPopularity.bind(this);
  }
  addContact() {
    const contactsCopy = [...this.state.contacts];
    const select =
      contactsCopy[Math.random(Math.floor() * contactsCopy.length)];
    if (!contactsCopy.includes(select)) {
      const newContact = contactsCopy.push(select);
      this.setState({ contacts: newContact });
    } else {
      this.addContact();
    }
  }
  deleteContact = id => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(id, 1);
    this.setState({ contacts: contactsCopy });
  };

  sortName() {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      contacts: contactsCopy
    });
  }
  sortPopularity() {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({
      contacts: contactsCopy
    });
  }

  render() {
    return (
      <>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortName}>sort by name</button>
        <button onClick={this.sortPopularity}>sort by popularity</button>

        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, idx) => (
              <ContactsCard
                key={idx}
                {...contact}
                deleteContact={() => this.deleteContact(idx)}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default List;
