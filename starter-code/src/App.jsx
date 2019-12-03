import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import contacts from './contacts.json';
import Celebrity from './Components/Celebrity';

class App extends Component {
  constructor() {
    super();
    const contactos = contacts.filter((value, index) =>
      index < 5 ? true : false
    );
    this.state = {
      contactsArray: contactos
    };
    this.addRandom = this.addRandom.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }

  sortByName() {
    const sortedContacts = this.state.contactsArray.sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    this.setState({
      contactsArray: [...sortedContacts]
    });
  }

  sortByPopularity() {
    const sortedContacts = this.state.contactsArray.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    this.setState({
      contactsArray: [...sortedContacts]
    });
  }

  addRandom() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contactsArray: [randomContact, ...this.state.contactsArray]
    });
  }

  render() {
    const contacts = this.state.contactsArray;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div className="App-intro">
          <div className="buttonGroup">
            <button onClick={this.addRandom}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
          <ul>
            {contacts.map(contact => {
              return (
                <Celebrity
                  key={contact.id}
                  name={contact.name}
                  picture={contact.pictureUrl}
                  popularity={contact.popularity}
                ></Celebrity>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
