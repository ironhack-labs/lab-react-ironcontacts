import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import DynamicContact from './components/DynamicContact'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
        <DynamicContact />
      </div>
    );
  }
}

export default App;
