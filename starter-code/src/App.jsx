import React, { Component } from 'react';
import contacts from './contacts.json';
import Card from './Component/Card';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addActor = this.addActor.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortPopularity = this.sortPopularity.bind(this);
    this.removeActor = this.removeActor.bind(this);
  }

  addActor() {
    const contact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState(previousState => ({
      contacts: [...previousState.contacts, contact]
    }));
  }

  sortName() {
    this.setState(previousState =>
      previousState.contacts.sort((a, b) => a.name.localeCompare(b.name))
    );
  }
  sortPopularity() {
    this.setState(previousState =>
      previousState.contacts.sort((a, b) => b.popularity - a.popularity)
    );
  }

  removeActor(id) {
    console.log('running remove', id);
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(contact => contact.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addActor}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((elem, id) => (
              <Card key={id} {...elem} removeActor={id => this.removeActor(id)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
