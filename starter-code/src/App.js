import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import AllContacts from './components/AllContacts'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AllContacts contactsArr={contacts} /> 
      </div>
    );
  }
}

export default App;
