import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    allContacts: contacts,
    contacts: contacts.splice(0, 5)
  };

  createRow = _ => {
    let movieTable = this.state.contacts.map((contact, i) => {
      return (
        <tr key={i}>
          <th>{contact.name}</th>
          <th>
            <img src={contact.pictureUrl} alt="" height="100px" />
          </th>
          <th>{contact.popularity}</th>
          <th>
            <button onClick={_ => this.deleteContact(i)}>Delete</button>
          </th>
        </tr>
      );
    });
    return movieTable;
  };

  createTable = _ => {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Popularity</th>
          <th> </th>
        </tr>
        {this.createRow()}
      </table>
    );
  };

  getRandomContact = e => {
    const getRandom = this.state.allContacts[Math.floor(Math.random() * contacts.length)];
    const contactArray = this.state.contacts;
    contactArray.push(getRandom);
    const uniqueContacts = Array.from(new Set(contactArray));
    this.setState({
      contacts: uniqueContacts
    });
  };

  sortContacts = (type, x, y) => {
    let sorted = this.state.contacts.sort((a, b) => (a[type] < b[type] ? x : y));
    console.log(sorted);
    this.setState({
      contacts: sorted
    });
  };

  deleteContact = i => {
    const copy = [...this.state.contacts];
    copy.splice(i, 1);
    this.setState({
      contacts: copy
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={this.getRandomContact}>Add Random Contact</button>
        <button onClick={_ => this.sortContacts('name', '-1', '1')}>Sort By Name</button>
        <button onClick={_ => this.sortContacts('popularity', '1', '-1')}>Sort By Popularity</button>
        {this.createTable()}
      </div>
    );
  }
}

export default App;
