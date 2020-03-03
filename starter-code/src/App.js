import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts.slice(0, 5)]
    };
    this.addRandom = this.addRandom.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }

  addRandom() {
    let newContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (this.state.contacts.includes(newContact)) {
      newContact = contacts[Math.floor(Math.random() * contacts.length)];
    } else {
      this.setState(previousState => ({
        contacts: [...previousState.contacts, newContact]
      }));
    }
  }

  removeContact(id) {
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(item => item.id !== id)
    }));
  }

  sortByName() {
    this.setState(previousState => ({
      contacts: [
        ...previousState.contacts.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      ]
    }));
  }

  sortByPopularity() {
    this.setState(previousState => ({
      contacts: [
        ...previousState.contacts.sort(function(a, b) {
          return b.popularity - a.popularity;
        })
      ]
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <section className="button-row">
          <button onClick={this.addRandom}>Add Random</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </section>
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
                <tr className="contact-single" key={item.id}>
                  <td>
                    <img src={item.pictureUrl} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity.toFixed(2)}</td>
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
