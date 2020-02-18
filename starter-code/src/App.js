import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import DisplayContact from './DisplayContact'

class App extends Component {
  render() {
    return (
      <div>
          <DisplayContact/>
      </div>
    );
  }
}

export default App;
