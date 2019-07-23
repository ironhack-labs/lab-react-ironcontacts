import React, { Component } from 'react';
import ContactList from './components/ContactList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <ContactList />
      </div>
    );
  }
}

export default App;
