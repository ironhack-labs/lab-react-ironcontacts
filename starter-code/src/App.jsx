import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    const contactsArray = contacts.filter((value, index) => {
      return index < 5 ? true : false;
    });
    this.state = {
      //contactsList: contacts.slice(0, 5)
      contactsList: [...contactsArray]
    };
    this.addRandomContact = this.addRandomContact.bind(this);
  }

  addRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContactsList = [...this.state.contactsList, randomContact];
    this.setState({
      contactsList: newContactsList
    });
    console.log('Random Contact');
  }

  render() {
    const contactsList = this.state.contactsList;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button class="button" onClick={this.addRandomContact}>
            Add Random Contact
          </button>
        </header>
        <table>
          {contactsList.map(value => {
            return (
              <div>
                <tr key={value.id}>
                  <td>
                    <img
                      src={value.pictureUrl}
                      className="image-actor"
                      alt="logo"
                    />
                  </td>
                  <td>{value.name}</td>
                  <td>{value.popularity.toFixed(0)}</td>
                </tr>
              </div>
            );
          })}
        </table>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
