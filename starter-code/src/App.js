import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './components/Contacts'

class App extends Component {
  render() {



    return (
      <React.Fragment>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IronStars</h1>
        </header>
        <main>
          <ContactsList />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
