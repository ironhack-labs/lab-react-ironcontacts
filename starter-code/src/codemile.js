import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Mytable from './components/tables/table'

let myContacs = [];
for (let i = 10; i < 15; i++) {
  myContacs[i] = contacts[i]
}
console.log(myContacs)




class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Mytable />
        

      </div>
    );
  }
}

export default App;
