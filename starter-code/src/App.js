import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Cont from './components/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Iron contacts</h1>
        </header>
        <p className="App-intro">
    
 
        </p>
         <Cont/>
     
      </div>
    );
  }
}

export default App;
