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
    this.setState(previousState => previousState.list.sort((a, b) => b.popularity - a.popularity));

  removeItem = id =>
    this.setState(previousState => ({
      list: previousState.list.filter(item => item.id !== id)
    }));

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Celebrities Contact List</h1>
        </header>

        <section className="buttons">
          <button onClick={this.addContact}>Add Contact</button>
          <button onClick={this.sortContactByName}>Sort By Name</button>
          <button onClick={this.sortContactByPopularity}>Sort By Popularity</button>
        </section>

        {this.state.list.map(contact => (
          <div className="App-intro" key={contact.id}>
            <div>
              <h3>Picture</h3>
              <img src={contact.pictureUrl} alt={contact.name} />
            </div>

            <div className="celebriety">
              <div>
                <h3>Name:</h3>
                <p>{contact.name}</p>
              </div>
              <div>
                <h3>Popularity</h3>
                <p>{contact.popularity}</p>
              </div>
            </div>
            <button className="delete" onClick={() => this.removeItem(contact.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
