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
    const newArray = [...this.state.firstContacts];
    const randomContact = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length - 1)];
    if (!newArray.includes(randomContact)) {
      newArray.push(randomContact);
    }
    this.setState({
      firstContacts: newArray,
    });
  }

  sortedContacts() {
    const newArray = [...this.state.firstContacts];
    const sortedContacts = newArray.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1 ;}
      return 0;
    });
    this.setState({
      firstContacts: sortedContacts,
    });
  }

  sortedByPopularity() {
    const newArray = [...this.state.firstContacts];
    const sortedContacts = newArray.sort((a, b) => {
      if (a.popularity > b.popularity) { return -1 ;}
      if (a.popularity < b.popularity) { return 1 ;}
      return 0;
    });
    this.setState({
      firstContacts: sortedContacts,
    });
  }

  deleteContact(idx) {
    const newArray = [...this.state.firstContacts];
    newArray.splice(idx,1);
    this.setState({
      firstContacts: newArray,
    });
  }

  render() {
    const arrayContacts = this.state.firstContacts.map((contact, idx) => (
      <tr>
        <td><img src={contact.pictureUrl} alt="photo" /></td>
        <td>{contact.name}</td>
        <td>{parseFloat(contact.popularity).toFixed(2)}</td>
        <td><button key = {idx} onClick={() => this.deleteContact(idx)}> Delete </button></td>
        
      </tr>
    ));


    return (
      
      <div className="list container-fluid">
        <h1>IronContacts</h1>
        
        <button onClick={this.randomContacts}> Add Random Contacts </button>
        <button onClick={this.sortedContacts}> Sort by name </button>
        <button onClick={this.sortedByPopularity}> Sort by popularity </button>
        <br/><br/>
        <table>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Action </th>
          </tr>
          <br/>
          {arrayContacts}
        </table>
      </div>
    );
  }
}

export default App;
