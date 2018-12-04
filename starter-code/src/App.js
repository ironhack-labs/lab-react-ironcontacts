import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Allcontacts from './contacts.json'
import Table from './components/Table/Table'

class App extends Component {
  constructor(){
    super()
    this.contacts = Allcontacts.slice(0,5);
   
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
       <Table contacts={this.contacts}/>
      </div>
    );
  }
}

export default App;
