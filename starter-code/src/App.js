import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from "./components/Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IRONCONTACT</h1>
        </header>
       

          <Contacts />
        
      </div>
    );
  }
}

export default App;
