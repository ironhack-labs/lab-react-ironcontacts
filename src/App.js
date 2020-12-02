import React, { Component } from 'react';

import './App.css';
import contactList from './contacts.json';

class App extends Component {
  state = {
    contacts: contactList.slice(0, 5),
    remainingContacts: contactList.slice(5),
  };
  addRandomContact = () => {
    let tempRemainingContacts = [...this.state.remainingContacts];
    const randomNum = Math.floor(Math.random() * tempRemainingContacts.length);
    let randomContact = tempRemainingContacts[randomNum];
    let tempContacts = [...this.state.contacts, randomContact];
    tempRemainingContacts.splice(randomNum, 1);
    this.setState({
      contacts: tempContacts,
      remainingContacts: tempRemainingContacts,
    });
  };
  sortByName = () => {
    let tempState = [...this.state.contacts];
    tempState.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({ contacts: tempState });
  };

  sortByPopularity = () => {
    let tempState = [...this.state.contacts];
    tempState.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ contacts: tempState });
  };
  deleteContact(id) {
    let tempState = this.state.contacts.filter((elem) => {
      return elem.id !== id;
    });
    this.setState({
      contacts: tempState,
    });
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttonsDiv">
          <button className="topButton" onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
          <button className="topButton" onClick={() => this.sortByName()}>
            Sort by name
          </button>
          <button className="topButton" onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      className="img"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      className="deleteButton"
                      onClick={() => this.deleteContact(contact.id)}
                    >
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
