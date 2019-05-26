import React, { Component } from 'react';
import './App.css';
//import contacts from './contacts.json';
import Header from './components/Header';
import ContactsList from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <ContactsList />
      </div>
    );
  }
}

export default App;
