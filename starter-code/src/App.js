import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/stateful/Contacts'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          IronContacts
        </p>
        <Contacts/>
      </div>
    );
  }
}

export default App;
