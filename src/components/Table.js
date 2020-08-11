import React, { Component } from 'react';
import contacts from '../contacts.json';
import ImproveContact from './ImprovedContact';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
    };
    this.contacts = contacts; /* all Contacts */
  }

  /* Random */
  addContact = () => {
    let addContact = [...this.state.contacts];
    addContact.push(contacts[Math.floor(Math.random() * this.contacts.length)]);
    this.setState({ contacts: addContact });
  };

  /*Sort by name */
  sortByName = () => {
    let sortByName = [...this.state.contacts];
    sortByName.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ contacts: sortByName });
  };
  /*Sort by popularity */
  sortByPopularity = () => {
    let sortByPopularity = [...this.state.contacts];
    sortByPopularity.sort((a, b) => b.popularity - a.popularity);
    this.setState({ contacts: sortByPopularity });
  };

  /*Delete*/
  deleteContact = (contactID) => {
    const filtered = this.state.contacts.filter(
      (contact) => contact.id !== contactID
    );
    this.setState({
      contacts: filtered,
    });
  };

  render() {
    console.log('All contacts', this.contacts);
    console.log('Five contacts', this.state.contacts);

    return (
      <section>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {/* sacamos los objetos de la array con el .map  */}
          {this.state.contacts.map((oneContact, index) => {
            return (
              <ImproveContact
                key={oneContact.id}
                {...oneContact}
                clickToDelete={() => this.deleteContact(oneContact.id)}
              />
            );
          })}
        </table>
      </section>
    );
  }
}
export default Table;
