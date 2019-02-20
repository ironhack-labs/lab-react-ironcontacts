import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from "./components/Table.js";
import Button from "./components/buttons/Button.js";




class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  }
  addRandom = () => {
    const newState = {...this.state}
    newState.contacts.push(contacts[Math.floor(Math.random() * (contacts.length + 1 ))])
    this.setState(newState)
  }


  sName = () => {
    const newState = {...this.state}
    newState.contacts.sort((a,b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    })
    this.setState(newState)
  }
  
  sPop = () => {
    const newState = {...this.state}
    newState.contacts.sort((a,b) => {
        if (a.popularity > b.popularity) return -1;
        if (a.popularity < b.popularity) return 1;
        return 0;
    })
    this.setState(newState)
  }
  delete = (index) => {
    const newState = {...this.state}
    newState.contacts.splice(index,1)
    this.setState(newState)
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button onClick={this.addRandom}>Add Random Contact</Button>
        <Button onClick={this.sName}>Sort by name</Button>
        <Button onClick={this.sPop}>Sort by populate</Button>
        <Table contacts={this.state.contacts} onClick={this.delete}/>
      </div>
    );
  }
}

export default App;
