import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addRandomContact() {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // console.log(randomContact);
    if (!this.state.contacts.includes(randomContact)) {
      this.setState(previousState => ({
        contacts: [...previousState.contacts, randomContact]
      }));
    } else {
      this.addRandomContact();
    }
  }

  sortByName() {
    this.setState(previousState => ({
      contacts: previousState.contacts.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    }));
  }

  sortByPopularity() {
    this.setState(previousState => ({
      contacts: previousState.contacts.sort((a, b) => b.popularity - a.popularity)
    }));
  }

  removeContact(id) {
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
            {this.state.contacts.map(item => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.pictureUrl} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity}</td>
                  <td>
                    <button onClick={() => this.removeContact(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
