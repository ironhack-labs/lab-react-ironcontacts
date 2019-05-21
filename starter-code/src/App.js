import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import ContactList from './components/ContactsList'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <ContactList contacts={contacts} />
        </main>
      </div>
    );
  }
}

export default App;
