import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
    contactsList: contacts.slice(0, 5)
  }
}

  addRandom = () => {
    const randomNum = Math.floor(Math.random() * (contacts.length));
    let copyList = [...this.state.contactsList];
    copyList.push(contacts[randomNum]);
    this.setState({contactsList: copyList});
  }

  sortByName = () => {
    let copyList = [...this.state.contactsList];
    let newList = copyList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({contactsList: newList});
  }

  sortByPopularity = () => {
    let copyList = [...this.state.contactsList];
    let newList = copyList.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({contactsList: newList});
  }

  deleteContact = (index) => {
    let copyList = [...this.state.contactsList];
    copyList.splice(index, 1);
    this.setState({contactsList: copyList});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
            {this.state.contactsList.map((contact, index) => {
              let position = index;
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} width="50" ></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={(popositionsit) => {this.deleteContact(position)}}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
