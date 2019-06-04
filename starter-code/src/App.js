import React, { Component } from 'react';
import './App.css';

import ContactList from './components/ContactList'

class App extends Component {

  
  render() {
    return (
      <main>
      <h1>IronContacts</h1>
      <ContactList/>
      </main>
      
    );
  }
}

export default App;
