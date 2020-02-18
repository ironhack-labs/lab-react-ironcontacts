import React, { Component } from 'react';

import './App.css';
import ContactsList from "./ContactsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsList />
      </div>
    );
  }
}

export default App;
