import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Display from './Components/Display/Display';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Display contacts={contacts} number={5}/>
      </div>
    );
  }
}

export default App;
