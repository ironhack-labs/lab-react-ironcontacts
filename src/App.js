import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React, { Component } from 'react';
import Contacts from "./components/Contacts.js"


class App extends Component{
  render(){
    return (
      <div className="App">
        <Contacts contacts={contacts} />
      </div>
    )
  }
}

export default App;
