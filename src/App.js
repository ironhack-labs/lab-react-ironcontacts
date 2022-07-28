import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import DisplayContacts from './components/DisplayContacts'

// const firstContacts = contacts.splice(0,5);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IRON CONTACTS</h1>
        <DisplayContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;