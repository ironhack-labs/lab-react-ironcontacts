import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Contact, Table} from './contacts.js'


class App extends Component {
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <Contact/>
        </div>
    )
  }
}

export default App;
