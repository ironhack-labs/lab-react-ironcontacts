import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactList from './components/ContactList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div>
      <ContactList/>
    </div>
  </div>
);

export default App;
