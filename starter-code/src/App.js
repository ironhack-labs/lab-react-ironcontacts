import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from "./Table";
import Button from "./Button"

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
}
addRandom = () =>{
  const newState = {...this.state}
  newState.contacts.push(contacts[Math.floor(Math.random()*(contacts.length + 1))])
  this.setState(newState)
}

sortName = ()=> {
  const newState = {...this.state}
  newState.contacts.sort((a,b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0
  })
  this.setState(newState)
}

  sortPopularity = ()=>{
    const newState = {...this.state}
  newState.contacts.sort((a,b) => {
        if(a.popularity > b.popularity) return 1;
        if(a.popularity < b.popularity) return -1;
        return 0

  })
  this.setState(newState)
}
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button onClick={this.addRandom}>  Add Random Button </Button>
        <Button onClick={this.sortName}>  Sort by name </Button>
        <Button onClick={this.sortPopularity}>  Sort by popularity </Button>
        <Table contacts={this.state.contacts}/>

      </div>
    );
  }
}

export default App;
