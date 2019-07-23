import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './components/ListContacts'

class App extends Component {
  render() {
    return (
      <div className="App">
          <ListContacts />
      </div>
    );
  }
}

export default App;
