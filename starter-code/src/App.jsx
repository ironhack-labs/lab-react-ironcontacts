import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Conta from './conta';

let original = contacts.slice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: original
    };

    this.addContact = this.addContact.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addContact() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    const newContacts = [...this.state.contacts, random];
    if (!this.state.contacts.includes(random)) {
      console.log('im runnning');
      this.setState({
        contacts: newContacts
      });
    } else {
      this.addContact();
    }
  }

  sortByName() {
    const sorted = this.state.contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    const sortedByNameContacts = [...sorted];
    console.log(sorted);
    this.setState({
      contacts: sortedByNameContacts
    });
  }

  sortByPopularity() {
    const sorted = this.state.contacts.sort((a, b) =>
      a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0
    );
    const sortedByPopularityContacts = [...sorted];

    this.setState({
      contacts: sortedByPopularityContacts
    });
  }
  removeItem(id) {
    console.log(id);
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(item => item.id !== id)
    }));
  }

  render() {
    const contacts = this.state.contacts;

    return (
      <div className="App">
        <h1> Iron Contacts</h1>
        <button onClick={() => this.addContact()}>Add Contact</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <Conta
                key={contact.id}
                id={contact.id}
                name={contact.name}
                picture={contact.pictureUrl}
                popularity={contact.popularity}
                delete={id => this.removeItem(id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
