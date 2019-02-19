import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <IronContact />
      </div>
    );
  }
}

class IronContact extends Component {
  // ****** Constructor ******
  constructor(props) {
    super(props);
    // initialize contacts
    this.contacts = contacts.filter((contact, i) => i < 5);
    // only change of state will the page be rendered
    this.state = {
      ironContacts: this.contacts
    };

    this.handleClickRandom = this.handleClickRandom.bind(this);
    this.handleClickSortName = this.handleClickSortName.bind(this);
    this.handleClickSortPopularity = this.handleClickSortPopularity.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // ****** Random Button ******
  handleClickRandom() {
    this.contacts.push(
      contacts[Math.floor(Math.random() * contacts.length - 5 + 1) + 5]
    );

    this.setState(() => ({
      ironContacts: this.contacts
    }));
  }

  // ****** Sort by Name Button ******
  handleClickSortName() {
    this.contacts.sort((c1, c2) => {
      if (c1.name < c2.name) return -1;
      if (c1.name > c2.name) return 1;
    });

    this.setState(() => ({
      ironContacts: this.contacts
    }));
  }

  // ****** Sort by Popularity Button ******
  handleClickSortPopularity() {
    this.contacts.sort((c1, c2) => {
      if (c1.popularity > c2.popularity) return -1;
      if (c1.popularity < c2.popularity) return 1;
    });

    this.setState(() => ({
      ironContacts: this.contacts
    }));
  }

  // ****** Delete Button ******
  handleClickDelete(i) {
    this.contacts.splice(i, 1);

    this.setState(() => ({
      ironContacts: this.contacts
    }))
  }

  // ****** Render ******
  render() {
    return (
      <div className="contact">
        <div className="buttons">
          <button onClick={this.handleClickRandom}>Add Random Contact</button>
          <button onClick={this.handleClickSortName}>Sort By Name</button>
          <button onClick={this.handleClickSortPopularity}>
            Sort By Popularity
          </button>
        </div>

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
            {this.state.ironContacts.map((contact, i) => (
              <tr key={i}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.handleClickDelete(i)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
