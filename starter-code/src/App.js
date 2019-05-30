import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact />
      </div>
    );
  }
}

export default App;
