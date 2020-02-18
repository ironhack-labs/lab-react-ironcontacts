import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import DisplayContacts from './components/DisplayContacts';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <DisplayContacts contacts = {contacts}/>
      </div>
    );
  }
}

export default App;
