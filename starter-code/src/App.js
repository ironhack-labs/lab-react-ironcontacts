import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contacts from './contacts.json'
import MyContacts from './MyContacts.js'
import ButtonRandom from './addRandomActor.js'


//const randomGuy = Contacts[Math.floor(Math.random()*Contacts.length)];

class App extends Component {
  state= {
    Contacts : Contacts || [],
    chosenContacts: Contacts.slice(0,5)
  }
  addContact =()=>{
    this.setState({
      chosenContacts:[...this.state.chosenContacts, Contacts[Math.floor(Math.random()*Contacts.length)]]
})}
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Iron Contacts</h1>
        <p className="App-intro">
        <ButtonRandom addContact={this.addContact}/>
        <MyContacts chosenContacts={this.state.chosenContacts}/>
        </p>
      </div>
    );
  }
}

export default App;
