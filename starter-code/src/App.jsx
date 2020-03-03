import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';

const firstFive = contacts.slice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: firstFive
    };
    this.randomItem = this.randomItem.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }

  randomItem() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    //console.log(randomContact);

    this.setState({
      contacts: [...this.state.contacts, randomContact]
    });
  }

  sortByName() {
    const sortedByname = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedByname);

    this.setState({
      contacts: [...this.state.contacts, sortedByname]
    });
  }

  sortByPopularity() {
    const sortedByPopularity = this.state.contacts.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    console.log(sortedByPopularity);

    this.setState({
      contacts: [...this.state.contacts, sortedByPopularity]
    });
  }

  deleteOne(error) {
    const deleteOne = [...this.state.contacts];
    deleteOne.splice(error, 1);
    this.setState(previousState => ({
      contacts: deleteOne
    }));
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomItem()}>Random</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => {
              return (
                <tr>
                  <td>
                    <img className="pic-img" src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteOne()}>Delete</button>
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
