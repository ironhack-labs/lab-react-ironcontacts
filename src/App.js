import React from 'react';
import logo from './logo.svg';
import contacts from './contacts.json';
import IronContacts from './components/IronContacts';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>IronContacts</h1>
      <IronContacts />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
