import React, { Component } from 'react';

import './App.css';

import Table from './components/Table/Table';
import

import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0,5),
  }

  render() {
    return (
    <div className="App">
    <h1>IronContacts</h1>

    <Table headers ={['Pciture', 'Name', 'Popularity']} data = {this.state.contacts}/>
    <
    </div>
  );
 }
}

export default App;
