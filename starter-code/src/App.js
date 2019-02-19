import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactsTablet from './components/ContactsTable/ContactsTable.jsx';
import './App.css';
class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  }
  addRandom = () => {
    let newState = {
      ...this.state
    }

    newState.contacts.push(contacts[Math.floor(Math.random() * contacts.length)])

    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="Controller">
          <button onClick={this.addRandom}>Add Random Contact</button>
        </div>
        <ContactsTablet contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
