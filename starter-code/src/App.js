import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Allcontacts from './contacts.json';
import DisplayContact from './DisplayContact'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <DisplayContact props={Allcontacts}/>
      </div>
    );
  }
}

export default App;
