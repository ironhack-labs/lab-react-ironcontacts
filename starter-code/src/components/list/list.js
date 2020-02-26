import React, { Component } from "react";
import Contacts from "../../contacts.json";
import CardImproved from "../cards/ImprovedCards";

class DynamicContactsList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: Contacts.slice(0, 5)
    };
  }

  deleteContact = idx => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(idx, 1);
    this.setState({ contacts: contactsCopy });
  };
  addContact = () => {
    const idx1 = Contacts[Math.floor(Math.random() * Contacts.length)];
    const contactsCopy1 = [...this.state.contacts];
    contactsCopy1.push(idx1);
    this.setState({ contacts: contactsCopy1 });
  };
  sortByName = () => {
    const contactsCopy1 = [...this.state.contacts];
    contactsCopy1.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: contactsCopy1 });
  };
  sortByPopularity = () => {
    const contactsCopy1 = [...this.state.contacts];
    contactsCopy1.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: contactsCopy1 });
  };

  render() {
    const filteredContacts = this.state.contacts;

    return (
      <>
        <button onClick={this.addContact}>Añadir contacto</button>
        <button onClick={this.sortByName}>Ordenar por nombre</button>
        <button onClick={this.sortByPopularity}>Ordenar por popularidad</button>
        <table>
          <thead>
            <tr className="parts">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.state.contacts.map((elm, idx) => (
            <CardImproved
              key={idx}
              {...elm}
              deleteOneContact={() => this.deleteContact(idx)}
            />
          ))}
        </table>
      </>
    );
  }
}

export default DynamicContactsList;
