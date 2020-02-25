import React, { Component } from 'react';
import './App.css';
import allContacts from './contacts.json';
import Contact from './Contact';

let fiveContacts = allContacts.slice(0, 5);

class App extends Component {

  state = {
    contacts: fiveContacts
  }

  addContact() {

    let availableContacts = allContacts.filter(contact => !this.state.contacts.includes(contact));

    let newContacts = [...this.state.contacts]
    newContacts.push(availableContacts[Math.floor(Math.random() * availableContacts.length)]);

    this.setState({
      contacts: newContacts
    });
  }


  sortByName() {
    let newState = {...this.state};

    newState.contacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: this.state.contacts.sort((a,b) => a.name.localeCompare(b.name))
    });
  }


  sortByPopularity() {
    let newState = {...this.state};

    newState.contacts.sort((a, b) => b.popularity - a.popularity);

    this.setState(newState);
  }


  deleteContact(idx) {
    let newState = {...this.state};

    newState.contacts.splice(idx, 1);

    this.setState(newState);
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={() => this.addContact()}>Add Random Contact</button>
          <button onClick={() => this.sortByName()}>Sort By Name</button>
          <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        </div>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, idx) => (
              <Contact key={contact.id} img={contact.pictureUrl} name={contact.name} popularity={contact.popularity} clickToDelete={() => this.deleteContact(idx)}></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
