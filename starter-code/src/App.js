import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';
import Contact from './Contact.js';

class App extends Component {
 
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <nav>
          <ul>
            <li><button onClick={() => this.addRandomContact()} >Add Random Contact</button></li>
          </ul>
        </nav>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>name</th>
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((val, idx) => 
              <Contact key={idx} {...val} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
