import React, { Component } from 'react';
import contacts from './contacts.json';
import './app.css';

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5),
  };

  isIncluded = (contact) => {
    return this.state.contactsList.find(
      (includedContact) => includedContact.name === contact.name
    );
  };

  getRemainingContacts = () => {
    return contacts.filter((contact) => !this.isIncluded(contact));
  };

  getRandomContact = () => {
    const remainingContacts = this.getRemainingContacts();
    const randIndex = Math.floor(Math.random() * remainingContacts.length);
    return remainingContacts[randIndex];
  };

  addRandomContact = () => {
    const randContact = this.getRandomContact();
    this.setState({
      contactsList: [...this.state.contactsList, randContact],
    });
  };

  sortByName = () => {
    const sortedList = [...this.state.contactsList].sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    this.setState({
      contactsList: sortedList,
    });
  };

  sortByPopularity = () => {
    const sortedList = [...this.state.contactsList].sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });
    this.setState({
      contactsList: sortedList,
    });
  };

  deleteContact = (index) => {
    this.setState({
      contactsList: this.state.contactsList.filter((contact, i) => i !== index),
    });
  };

  render() {
    return (
      <div id="wrapper">
        <div id="title">
          <i class="far fa-star fa-2x"></i>
          <h1>IronContacts</h1>
          <i class="far fa-star fa-2x"></i>
        </div>
        <div id="menu">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((person, i) => (
              <tr key={i}>
                <td>
                  <img src={person.pictureUrl} alt="Actor" />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={(evt) => this.deleteContact(i)}>
                    <i class="fas fa-user-minus"></i>
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

export default App;
