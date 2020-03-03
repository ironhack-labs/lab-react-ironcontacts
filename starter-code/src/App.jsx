import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts.slice(0, 5)]
    };
    this.randomItem = this.randomItem.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  randomItem() {
    //if( )
    const contactToAdd = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState(previousState => ({
      contacts: [...previousState.contacts, contactToAdd]
    }));
  }

  sortByName() {
    this.setState(previousState => ({
      contacts: [
        ...previousState.contacts.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA > nameB) {
            return 1;
          } else if (nameA < nameB) {
            return -1;
          } else {
            return 0;
          }
        })
      ]
    }));
  }

  sortByPopularity() {
    this.setState(previousState => ({
      contacts: [
        ...previousState.contacts.sort(function(a, b) {
          return b.popularity - a.popularity;
        })
      ]
    }));
  }

  removeItem(id) {
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.randomItem}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <table>
          <tr>
            <th>
              <h1>Picture</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Popularity</h1>
            </th>
          </tr>
          {this.state.contacts.map(item => {
            return (
              <tr className="remove-btn" key={item.id}>
                <td>
                  <img src={item.pictureUrl} />
                </td>
                <td>{item.name}</td>
                <td>{item.popularity.toFixed(2)}</td>
                <button onClick={() => this.removeItem(item.id)}>Remove</button>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
