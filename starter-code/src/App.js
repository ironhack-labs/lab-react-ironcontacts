import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'         
import Contacts from './components/Contacts.js'

class App extends Component {
  
  
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Iron Contacts</h1>
        </header>
        <section className='text'>
          <p className="App-intro">
            <code>Please use the buttons bellow to Add and Sort your contacts</code>
          </p>
        </section>

        <Contacts contacts={contacts}></Contacts>

      </div>

    );
  }
}

export default App;
