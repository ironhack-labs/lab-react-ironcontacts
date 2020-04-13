import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IronContacts from './Components/IronContacts';

class App extends Component {
  render() {
    
    return (
      <div className="box">
        <IronContacts />
      </div>
    );
  }
}

export default App;
