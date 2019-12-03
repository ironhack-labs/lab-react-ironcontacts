import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
  }

  addRandom() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contactsArray: [...this.state.contactsArray, randomContact]
    });
  }

  render() {
    const contacts = this.state.contactsArray;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
          <button onClick={this.addRandom}>Add Random Contact</button>
        </header>
        <p className="App-intro">
          <table>
            {contacts.map(contact => {
              return (
                <Celebrity
                  name={contact.name}
                  picture={contact.pictureUrl}
                  popularity={contact.popularity}
                  id={contact.id}
                ></Celebrity>
              );
            })}
          </table>
        </p>
      </div>
    );
  }
}

export default App;
