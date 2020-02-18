import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableContacts from './TableContacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <TableContacts/>

        
      </div>
    );
  }
}

export default App;
