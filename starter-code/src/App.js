import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import ContactList from './components/ContactList'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header title="IronContacts"/>
        <ContactList/>
        
      </div>
    );
  }
}

export default App;
