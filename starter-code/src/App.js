import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactList from './components/ContactList'

class App extends Component {


  render() {

    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <ContactList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
