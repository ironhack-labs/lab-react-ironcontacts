import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import TableEntry from './components/TableEntry';

// console.log(contacts);

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactsList: contacts.splice(0, 5)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.compareName = this.compareName.bind(this);
    this.comparePopularity = this.comparePopularity.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addRandomContact() {
    const item = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState(previousState => ({
      contactsList: [...previousState.contactsList, item]
    }));
  }

  compareName(a, b) {
    let contactA = a.name;
    let contactB = b.name;
    let comparison = 0;
    if (contactA > contactB) {
      comparison = 1;
    } else if (contactA < contactB) {
      comparison = -1;
    }
    return comparison;
  }

  comparePopularity(a, b) {
    let contactA = a.popularity;
    let contactB = b.popularity;
    let comparison = 0;
    if (contactA > contactB) {
      comparison = -1;
    } else if (contactA < contactB) {
      comparison = 1;
    }
    return comparison;
  }

  sortByName() {
    this.setState(previousState => ({
      contactsList: previousState.contactsList.sort(this.compareName)
    }));
  }

  sortByPopularity() {
    this.setState(previousState => ({
      contactsList: previousState.contactsList.sort(this.comparePopularity)
    }));
  }

  removeContact(id) {
    this.setState(previousState => ({
      contactsList: previousState.contactsList.filter(contact => contact.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map(contact => (
              <TableEntry
                pictureUrl={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
                id={contact.id}
                delete={id => this.removeContact(id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
