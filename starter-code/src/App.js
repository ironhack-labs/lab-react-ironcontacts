import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import contacts from './contacts.json'
import ContactsContainer from './components/ContactsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsContainer/>
      </div>
    );
  }
}

export default App;
