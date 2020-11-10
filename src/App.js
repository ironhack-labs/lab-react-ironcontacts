import React, { Component } from 'react';

// Css Style for whole App.js
import './App.css';

// Import DataBase
import contacts from './contacts.json';

class App extends Component {
  // * Start state of the components
  state = {
    contactsShown: contacts.slice(0, 5),
    contactsHidden: contacts.slice(5, contacts.length),
    // ! Added a state for the text of buttons to change it after
    addButton: 'Add Random Contact',
    sortNameButton: 'Sort By Name',
    sortPopButton: 'Sort By Popularity',
  };

  // TODO Function to display contacts
  displayContacts = () => {
    const showContacts = this.state.contactsShown.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>
            <img
              style={{ width: 150 }}
              src={contact.pictureUrl}
              alt={contact.name}
            />
          </td>
          <td>{contact.name}</td>
          {/* Just 2 decimals after the number with toFixed(2) */}
          <td>{contact.popularity.toFixed(2)}</td>
          <td>
            <button
              className="delete-button"
              onClick={() => this.deleteContact(contact.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return showContacts;
  };

  // TODO Function to add a random contact
  getRandomContact = () => {
    if (this.state.contactsHidden.length > 0) {
      const randomNum = Math.floor(
        Math.random() * this.state.contactsHidden.length
      );
      this.state.contactsShown.push(this.state.contactsHidden[randomNum]);
      this.state.contactsHidden.splice(randomNum, 1);
      this.setState({ contactsShown: this.state.contactsShown });
    } else {
      this.setState({ addButton: 'No more available contacts' });
    }
  };

  // TODO Sort contacts by name
  sortByName = () => {
    this.state.contactsShown.sort((user1, user2) =>
      user1.name.localeCompare(user2.name)
    );
    this.setState({ contactsShown: this.state.contactsShown });
    this.setState({ sortNameButton: 'Sorted by Name' });
  };

  // TODO Sort contacts by popularity
  sortByPop = () => {
    this.state.contactsShown.sort(
      (user1, user2) => user2.popularity - user1.popularity
    );
    this.setState({ contactsShown: this.state.contactsShown });
    this.setState({ sortPopButton: 'Most famous first!' });
  };

  // TODO Delete one of the contactsShown
  deleteContact = (id) => {
    const idxToRemove = this.state.contactsShown.findIndex(
      (contact) => contact.id === id
    );
    this.state.contactsHidden.push(this.state.contactsShown[idxToRemove]);
    this.state.contactsShown.splice(idxToRemove, 1);
    this.setState({ contactsShown: this.state.contactsShown });
  };

  // ! Render the results
  render() {
    return (
      <div className="App">
        <div className="app_hero_container">
          <h1>IronContacts</h1>
          <h2>
            <strong>Shown contacts: </strong>
            {this.state.contactsShown.length} |{' '}
            <strong>Hidden contacts: </strong>
            {this.state.contactsHidden.length}
          </h2>
          <hr />
        </div>
        <div className="btn_container">
          <button onClick={this.getRandomContact}>
            {this.state.addButton}
          </button>
          <button onClick={this.sortByName}>{this.state.sortNameButton}</button>
          <button onClick={this.sortByPop}>{this.state.sortPopButton}</button>
        </div>
        <div className="contacts_container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="cards">{this.displayContacts()}</tbody>
          </table>
        </div>
        <button className="add-button" onClick={this.getRandomContact}>
          More Big Stars!
        </button>
      </div>
    );
  }
}

export default App;
