import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Header from './components/Header';
import ContactsList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="row">
        <ContactsList contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default App;
