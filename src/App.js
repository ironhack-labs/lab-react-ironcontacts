import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts,
      firstContacts: contacts.slice(0, 5),
    };
    this.randomContacts = this.randomContacts.bind(this);
    this.sortedContacts = this.sortedContacts.bind(this);
    this.sortedByPopularity = this.sortedByPopularity.bind(this);
  }
  randomContacts() {
    const newArr = [...this.state.firstContacts];
    const randomContact = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length - 1)];
    if (!newArr.includes(randomContact)) {
      newArr.push(randomContact);
    }
    this.setState({
      firstContacts: newArr,
    });
  }
  sortedContacts() {
    const newArr = [...this.state.firstContacts];
    const sortedContacts = newArr.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1 ;}
      return 0;
    });
    this.setState({
      firstContacts: sortedContacts,
    });
  }
  sortedByPopularity() {
    const newArr = [...this.state.firstContacts];
    const sortedContacts = newArr.sort((a, b) => {
      if (a.popularity > b.popularity) { return -1 ;}
      if (a.popularity < b.popularity) { return 1 ;}
      return 0;
    });
    this.setState({
      firstContacts: sortedContacts,
    });
  }
  deleteContact(idx) {
    const newArr = [...this.state.firstContacts];
    newArr.splice(idx,1);
    this.setState({
      firstContacts: newArr,
    });
  }
  render() {
    const arr = this.state.firstContacts.map((contact, idx) => (
      <tr>
        <td><img src={contact.pictureUrl} width="70" height="70" alt="photo" /></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <button key = {idx} onClick={() => this.deleteContact(idx)}>Delete</button>
      </tr>
    ));
    return (
      <div className="list container-fluid">
        <h1>IronContacts</h1>
        <button onClick={this.randomContacts}>Add Random Contacts</button>
        <button onClick={this.sortedContacts}>Sort by name</button>
        <button onClick={this.sortedByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>photo</th>
            <th>name</th>
            <th>popularity</th>
            <th>action</th>
          </tr>
          {arr}
        </table>
      </div>
    );
  }
}
export default App;