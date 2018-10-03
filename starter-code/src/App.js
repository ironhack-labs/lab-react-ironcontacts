import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import DisplayContainer from './DisplayContainer.jsx'
import contacts from './contacts.json'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <DisplayContainer />
      </div>
    );
  }
}
export default App;
