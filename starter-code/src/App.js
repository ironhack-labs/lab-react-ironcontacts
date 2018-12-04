import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Allcontacts from './contacts.json'
import Table from './components/Table/Table'

class App extends Component {
  constructor(){
    super()
    this.state = {
      contacts: Allcontacts.slice(0,5)
    }
    //this.contacts = Allcontacts.slice(0,5);
   
  }

  addRandomContacts = () => {
    const newContact = Allcontacts[Math.floor(Math.random() * Allcontacts.length)]
    this.setState([...this.state, this.state.contacts.push(newContact)])
    console.log(newContact);
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
       <button className="Button" onClick={this.addRandomContacts}>Add Random Contact</button>
       <Table contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
