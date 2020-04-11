import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IronContacts from './components/IronContacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <content>
          <IronContacts />
        </content>
      </div>
    );
  }
}

export default App;
