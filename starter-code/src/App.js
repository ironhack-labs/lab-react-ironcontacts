import React, { Component } from 'react';
import './App.css';
// import contacts from './contacts.json'
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
