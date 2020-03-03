import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';

const original = contacts.slice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: original
    };
    this.addRandom = this.addRandom.bind(this);
    this.sortbyPopularity = this.sortbyPopularity.bind(this);
    this.sortByname = this.sortByname.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandom() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    const newContacts = [...this.state.contacts, random];

    console.log(newContacts);

    if (!this.state.contacts.includes(random)) {
      this.setState({
        contacts: newContacts
      });
    } else {
      this.addRandom();
    }
  }

  sortbyPopularity() {
    const sorted = this.state.contacts.sort(function(firstEl, secondEl) {
      return secondEl.popularity - firstEl.popularity;
    });

    const newSortedByPop = [...sorted];

    this.setState({
      contacts: newSortedByPop
    });
  }

  sortByname() {
    const sorted = this.state.contacts.sort(function(firstEl, secondEl) {
      if (firstEl.popularity < secondEl.popularity) return -1;
      if (firstEl.popularity > secondEl.popularity) return 1;
      return 0;
    });

    const newSortedByName = [...sorted];

    this.setState({
      contacts: newSortedByName
    });
  }

  deleteContact(error) {
    const deleteContact = [...this.state.contacts];
    deleteContact.splice(error, 1);
    this.setState({
      contacts: deleteContact
    });
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <h2>Iron Contacts</h2>
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.sortbyPopularity}>Sort by popularity</button>
          <button onClick={this.sortByname}>Sort by name</button>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => {
                  return (
                    <tr key={contact.name}>
                      <td>
                        <img src={contact.pictureUrl} alt={contact.name} />
                      </td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity.toFixed(2)}</td>
                      <td>
                        <button onClick={this.deleteContact} className="delete">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
