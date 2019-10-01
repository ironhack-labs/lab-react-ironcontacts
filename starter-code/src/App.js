import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';
import Contact from './Contact.js';

export default class App extends Component {
 
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
   
    }
  }

  addRandomContact() {
    const newContact = contacts[Math.floor(Math.random()*contacts.length)];
    const existingContact = this.state.contacts.find(contact => contact.name === newContact.name);

    if(existingContact) return this.addRandomContact();

    const newContacts = [...this.state.contacts];
    newContacts.push(newContact);

    this.setState({ contacts:newContacts })
  }

  sortByName() {
    let sortedContacts = [...this.state.contacts];
    sortedContacts = sortedContacts.sort((a,b) => { return (a.name < b.name) ? -1 : 1})

    this.setState({ contacts:sortedContacts })
  }

  sortByPopularity(){
    let sortedContacts = [...this.state.contacts];
    sortedContacts = sortedContacts.sort((a,b) =>  b.popularity - a.popularity)

    this.setState({ contacts:sortedContacts })
  }

  deleteContact(index) {
    let newContacts = [...this.state.contacts];
    newContacts = newContacts.filter((value, idx) => idx !== index );

    this.setState({ contacts:newContacts })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <nav>
          <ul>
            <li><button onClick={() => this.addRandomContact()} >Add Random Contact</button></li>
            <li><button onClick={() => this.sortByName()} >Sort by name</button></li>
            <li><button onClick={() => this.sortByPopularity()} >Sort by popularity</button></li>
          </ul>
        </nav>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((val, idx) =>  
                <Contact key={idx} {...val}>
                  <button onClick={() => this.deleteContact(idx)}>Delete</button>
                </Contact>      
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
