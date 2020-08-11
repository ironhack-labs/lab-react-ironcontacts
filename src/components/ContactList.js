import React, { Component } from 'react';
import contacts from '../contacts.json';
import BestCard from './BestCard';

class ContactList extends Component {
  constructor() {
    super();
    this.state = { contacts: contacts.slice(0, 5) };
  }

  addRandomContact = () => {
    const NewContact = [...this.state.contacts];
    const addOne = contacts[Math.floor(Math.random() * contacts.length)];

    NewContact.push(addOne);

    this.setState({
      contacts: NewContact,
    });
  };

  //ordenar por nombre

  sortByName = () => {
    const NameOrder = [...this.state.contacts];
    NameOrder.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: NameOrder,
    });
  };

  //ordenar por popularidad

  sortByPopularity = () => {
    const PopularityOrder = [...this.state.contacts];
    PopularityOrder.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: PopularityOrder,
    });
  };

  //delete contact
  deleteContact = (contactsIndex) => {
    const newDeleteContacts = [...this.state.contacts];
    newDeleteContacts.splice(contactsIndex, 1);
    this.setState({
      contacts: newDeleteContacts,
    });
  };

  render() {
    // console.log(this.state.contacts);
    return (
      <div>
        <div className="general-container">
          <div className="nav-buttons">
            <button className="button-style" onClick={this.addRandomContact}>
              Add Random Contact
            </button>
            <button className="button-style" onClick={this.sortByName}>
              Sort by Name
            </button>
            <button className="button-style" onClick={this.sortByPopularity}>
              Sort by Popularity
            </button>
          </div>
          <table>
            <thead>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </thead>
          </table>
          {this.state.contacts.map((oneContact, id) => {
            return (
              <BestCard
                key={oneContact.id}
                {...oneContact}
                clickToDelete={() => this.deleteContact(id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ContactList;
