import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import './App.css';

class App extends Component {
  //Functions

  state = {
    counter: 0,
    // loggedIn: false,
    // color: null,
    contacts: contacts,
    filteredContacts: contacts
  };




  showArray = () => {
    // let showContacts = contacts;
    let contactsCopy = this.state.contacts.map((person, i) => {
      return (
        <table key={i}>
          <tr>
            <th>{person.name}</th>
            <th>
              <img src={person.pictureUrl} width="75em" alt="img" />
            </th>
            <th>{person.popularity}</th>
          </tr>
        </table >
      )
    })
    console.log('')
    return contactsCopy.splice(0, 5)
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

        {this.showArray()}


      </div>
    );
  }
}

export default App;
