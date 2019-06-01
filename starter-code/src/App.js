import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import contacts from './contacts.json'
import MyContacts from './MyContacts.js'
import ButtonRandom from './addRandomActor.js'

const chosenContacts = contacts.slice(0,5)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Iron Contacts</h1>
        <p className="App-intro">
        <ButtonRandom/>
        <MyContacts chosenContacts={chosenContacts}/>
        </p>
      </div>
    );
  }
}

export default App;
