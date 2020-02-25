import React, { Component } from 'react';
import './App.css';
import List from './components/List/List'

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

export default App;
