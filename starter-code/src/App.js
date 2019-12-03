import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ShowContacts from "./components/ShowContacts";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ShowContacts contactsArr={contacts} />
      </div>
    );
  }
}

export default App;
