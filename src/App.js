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

  sortByName = () => {
    const sortedContacts = this.state.contactsArray.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      contactsArray: sortedContacts,
    });
  };

  sortByPopularity = () => {
    const sortedPop = this.state.contactsArray.sort((a, b) =>
      a.popularity > b.popularity ? 1 : b.popularity > a.popularity ? -1 : 0
    );
    this.setState({
      contactsArray: sortedPop,
    });
  };

  deleteActor = (index) => {
    this.state.contactsArray.splice(index, 1);
    this.setState({
      contactsArray: this.state.contactsArray,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsArray.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteActor(index)}>
                      Delete
                    </button>
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
