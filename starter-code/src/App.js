import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    allContacts: contacts
  }

  // showContacts = () => {
  //   <p>{this.state.contacts}</p>
  //   // return contactsList = contacts.map()
  // }

  showListOfContacts = () => {
    let listOfContacts = this.state.allContacts.map((eachContact,i)=> {
        return <li>{eachContact.name}</li>;
    })
    return listOfContacts;
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <table>
        {this.showListOfContacts()}
        </table>
      </div>
    );
  }
}

export default App;
