import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContactsPage } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsPage />
      </div>
    );
  }
}

export default App;
