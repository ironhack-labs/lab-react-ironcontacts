import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: contacts.slice(0, 5)
    };
    this.addContact = this.addContact.bind(this);
    this.sortContactByName = this.sortContactByName.bind(this);
    this.sortContactByPopularity = this.sortContactByPopularity.bind(this);
  }

  addContact() {
    const contact = contacts[Math.floor(Math.random() * contacts.length)];
    if (this.state.list.find(contactTry => contactTry.id === contact.id) === undefined) {
      this.setState(previousState => ({
        list: [...previousState.list, contact]
      }));
    } else this.addContact();
  }

  sortContactByName = () =>
    this.setState(previousState => previousState.list.sort((a, b) => a.name.localeCompare(b.name)));

  sortContactByPopularity = () =>
    this.setState(previousState => previousState.list.sort((a, b) => a.popularity - b.popularity));

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.addContact}>Add Contact</button>
        <button onClick={this.sortContactByName}>Sort By Name</button>
        <button onClick={this.sortContactByPopularity}>Sort By Popularity</button>
        {this.state.list.map(contact => (
          <div className="App-intro" key={contact.id}>
            <div>
              <p>Picture</p>
              <img src={contact.pictureUrl} alt={contact.name} />
            </div>
            <div>
              <p>Name:</p>
              <p>{contact.name}</p>
            </div>
            <div>
              <p>Popularity</p>
              <p>{contact.popularity}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
