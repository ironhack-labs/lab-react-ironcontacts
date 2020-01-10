import React, { Component } from 'react';
import './App.css';
import Header from './components/misc/Header';
import ContactsList from './components/contacts/ContactsList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContactsList />
      </div>
    );
  }
}

export default App;
