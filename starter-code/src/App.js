import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ContactsContainer from "./contacts/ContactsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
            <ContactsContainer/>
      </div>
    );
  }
}

export default App;
