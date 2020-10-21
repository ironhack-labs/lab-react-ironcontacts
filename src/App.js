//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {
  state = {
    contacts: contacts,
    randomContact: [],
    sortType: 'asc',
  };

  addContact = (min, max) => {
    const randomNum = Math.floor(Math.random() * max) + min;
    const randomContact = this.state.contacts[randomNum];

    this.setState({
      ...this.state,
      randomContact: [...this.state.randomContact, randomContact],
    });
  };

  nameSort = (allActualContacts) => {
    const sortActual = allActualContacts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      sortActual,
    });
    console.log(sortActual)
  };



  render() {
    const firstFiveContacts = this.state.contacts.slice(0, 5);
    const max = this.state.contacts.length - 1;
    const min = 5;
    //
    const allActualContacts = [
      ...firstFiveContacts,
      ...this.state.randomContact,
    ];

    return (
      <div className="App">
        <div>
          <h3>IronContacts</h3>
          <button onClick={() => this.addContact(min, max)}>
            Add Random Contact
          </button>
          <button onClick={() => this.nameSort(allActualContacts)}>
            Sort by name
          </button>
          <button>Sort by popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {firstFiveContacts.map((contact) => (
                // return
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              ))}
              {this.state.randomContact.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.pictureUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.popularity}</td>
                </tr>
              ))}
              {/* {this.state.sortActual.map((contact) => contact.name)} */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

