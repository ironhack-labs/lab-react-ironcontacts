import React, { Component } from 'react';
import './App.css';
import Header from './components/misc/Header';
import ContactList from './components/ContactList';

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
