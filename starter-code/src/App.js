import React, { Component } from 'react';
import logo from './oscars.png';
import './App.css';
import Contacts from './components/Contacts'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <section className="main-section">
          <Contacts />  
        </section>
      </div>
    )
  }
}

export default App;