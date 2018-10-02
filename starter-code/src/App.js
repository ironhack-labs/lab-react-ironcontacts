import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ContactList} from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList/>
      </div>
    );
  }
}

export default App;
