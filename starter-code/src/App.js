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
  }

  sortByName = () => {
  
    this.setState([...this.state, this.state.contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })])
  }

  sortByPopularity = () => {
    this.setState([...this.state, this.state.contacts.sort((a, b) => b.popularity - a.popularity)])
  }

  deleteItem = (e) => {
    let celebritiesCopy = [...this.state.contacts]
    celebritiesCopy.splice(e, 1)
    this.setState({...this.state, contacts: celebritiesCopy})
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
       <button className="Button" onClick={this.addRandomContacts}>Add Random Contact</button>
       <button className="Button" onClick={this.sortByName}>Sort by name</button>
       <button className="Button" onClick={this.sortByPopularity}>Sort by popularity</button>
       <Table contacts={this.state.contacts} deleteHandler={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
