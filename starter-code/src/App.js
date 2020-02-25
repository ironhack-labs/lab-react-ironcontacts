import React, { Component } from 'react';
import './App.css';
// import contacts from './contacts.json'
import List from './components/DinamicContactsList/DinamicContactList'

class App extends Component {
  render() {
    return (
      <>
        <h1>IronContacts</h1>
        <List></List>
      </>
    )
  }
}

export default App
