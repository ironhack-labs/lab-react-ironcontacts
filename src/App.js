import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contactsArray: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    const contactsArrayCopy = [...this.state.contactsArray];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (!this.state.contactsArray.includes(randomContact)) {
      contactsArrayCopy.push(randomContact);
      this.setState({
        contactsArray: contactsArrayCopy,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsArray.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
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
