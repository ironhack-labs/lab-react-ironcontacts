import React, { Component } from 'react';
import contacts from '../contacts.json';
import ContactsTable from './ContactsTable';

class DynamicContacts extends Component {
  constructor() {
    super();
    this.state = {
      listOfFive: contacts.slice(0, 5),
    };
  }

  handleRandomContacts = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    let addedlist = [randomContact, ...this.state.listOfFive]
    this.setState({
      listOfFive: addedlist.filter((contact, index) => {
          return (addedlist.indexOf(contact) === index)
      })
    });
  };

  handleSortbyName = () => {
    this.setState({
      listOfFive: this.state.listOfFive.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }),
    });
  };

  handleSortbyPopularity = () => {
    this.setState({
      listOfFive: this.state.listOfFive.sort(function (a, b) {
        return b.popularity - a.popularity;
      }),
    });
  };

  handleRemoveContact = (id) => {
    this.setState({
      listOfFive: this.state.listOfFive.filter((contact) => contact.id !== id),
    });
  };

  render() {
    console.log(this.state.listOfFive);
    const contactList = this.state.listOfFive.map((contact) => {
      return <ContactsTable key={contact.id} contact={contact} remove={this.handleRemoveContact} />;
    });

    return (
      <>
        <h2>IronContacts</h2>
        <button className="btn" onClick={this.handleRandomContacts}>add Random Contact</button>
        <button className="btn" onClick={this.handleSortbyPopularity}>Sort by popularity</button>
        <button className="btn" onClick={this.handleSortbyName}>Sort by Name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won<br/>Oscar</th>
            <th>Won<br/>Emmy</th>
            <th>Actions</th>
          </tr>
          {contactList}
        </table>
      </>
    );
  }
}

export default DynamicContacts;
