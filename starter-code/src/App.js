import React, { Component } from 'react';
import Header from './components/misc/Header';
import ContactList from './components/contacts/ContactList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContactList />
      </div>
    );
  }
}

export default App;
