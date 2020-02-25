import React, { Component } from 'react';
import './App.css';
import ContactCard from './components/card/ContactCard'
import List from './components/list/List'


class App extends Component {
  render() {
    return (
      <>
      <h1>IronContacts</h1>
      <List/>
      </>
    );
  }
}

export default App;


