import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ironContacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const random = Math.floor(Math.random() * contacts.length);
    this.setState(previousState => ({
      ironContacts: [...previousState.ironContacts, contacts[random]]
    }));
  }

  sortByName() {
    const sortedList = this.state.ironContacts.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
    this.setState(previousState => ({
      ironContacts: sortedList
    }));
  }

  sortByPopularity() {
    const sortedList = this.state.ironContacts.sort((a, b) =>
      a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0
    );
    this.setState(previousState => ({
      ironContacts: sortedList
    }));
  }

  deleteContact(id) {
    const filter = this.state.ironContacts.filter(item => item.id !== id);
    this.setState({
      ironContacts: filter
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ironContacts</h1>
        <div>
          <button onClick={this.addRandomContact}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
            {this.state.ironContacts.map(item => {
              console.log(item.id);
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.pictureUrl} alt="oi" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity}</td>
                  <td>
                    {' '}
                    <button onClick={() => this.deleteContact(item.id)}>Delete</button>
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
