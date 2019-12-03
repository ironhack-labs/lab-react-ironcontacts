import React, { Component } from "react";
import contacts from "../contacts.json";
import Contact from "../components/Contact";

class ListContacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts,
      filteredContacts: contacts.slice(0, 5)
    };
  }

  addNewContact = () => {
    let longitud = this.state.contacts.length;
    let index = Math.floor(Math.random() * longitud);
    const copyFilteredContacts = [...this.state.filteredContacts];
    copyFilteredContacts.push(contacts[index]);
    this.setState({
      contacts: contacts,
      filteredContacts: copyFilteredContacts
    });
  };

  sortByName = () => {
    const copyFilteredContacts = [...this.state.filteredContacts];
    copyFilteredContacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: contacts,
      filteredContacts: copyFilteredContacts
    });
  };

  sortByPopulariry = () => {
    const copyFilteredContacts = [...this.state.filteredContacts];
    copyFilteredContacts.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: contacts,
      filteredContacts: copyFilteredContacts
    });
  };

  deleteContact = idx => {
    const copyFilteredContacts = [...this.state.filteredContacts];
    copyFilteredContacts.splice(idx, 1);
    this.setState({
      contacts: contacts,
      filteredContacts: copyFilteredContacts
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addNewContact} className="btn btn-sm btn-dark">
          Add random contact
        </button>
        <button onClick={this.sortByName} className="btn btn-sm btn-dark">
          Sort by name
        </button>
        <button onClick={this.sortByPopulariry} className="btn btn-sm btn-dark">
          Sort by popularity
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredContacts.map((contactos, idx) => (
              <Contact
                key={idx}
                {...contactos}
                deleteContact={() => this.deleteContact(idx)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListContacts;
