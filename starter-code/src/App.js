import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addRandom = this.addRandom.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }

  addRandom() {
    function randomContact(contacts) {
      return contacts[Math.floor(Math.random() * contacts.length)];
    }

    // console.log(randomContact(contacts));
    const contact = randomContact(contacts);
    this.setState(previousState => ({
      contacts: [...previousState.contacts, contact]
    }));
    // console.log(this.state);
  }

  sortByName() {
    const sorted = this.state.contacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    const arrSortByName = [...sorted];
    this.setState(() => ({
      contacts: arrSortByName
    }));
  }

  sortByPopularity() {
    const sorted = this.state.contacts.sort(function(a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });

    const arrSortByPopularity = [...sorted];
    this.setState(() => ({
      contacts: arrSortByPopularity
    }));
  }

  removeItem (id) {
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(contact => contact.id !== id)
    }));

  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.state.contacts.map(contact => (
            <Contacts
              id={contact.id}
              picture={contact.pictureUrl}
              name={contact.name}
              popularity={contact.popularity}
              delete={(id) => this.removeItem(id)}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default App;
