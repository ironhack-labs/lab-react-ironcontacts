import React, { Component } from 'react';

import './App.css';
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        
        <Contact />
      </div>
    );
  }
}

export default App;
