import React, { Component } from 'react';
import './App.css';
import ContactTable from './components/Contacts table/ContactTable';
import contacts from './contacts.json';
import FunctionButton from './components/functionButton/FunctionButton';


class App extends Component {

  state = {
    list: contacts.slice(0, 5)
  }

  addRandomContact = () => {
    let newState = {
      ...this.state
    }    

    newState.list.push(contacts[Math.floor(Math.random() * contacts.length)])

    this.setState(newState)
  }

  sortByName = () => {
    let newState = {
      ...this.state
    }    

    newState.list.sort((a, b) => {
    if (a.name < b.name) {return -1;}
    if (a.name > b.name) {return 1;}
    return 0
  })
  this.setState(newState)

}

  sortByPopularity = () => {
    let newState = {
      ...this.state
    }  

    newState.list.sort((a, b) => b.popularity - a.popularity)

    this.setState(newState)

  }

  deleteContact = (name) => {
    let newState = {
      ...this.state
    }  
    // Necesitamos guardarlo 
    newState.list = newState.list.filter(e => e.name !== name) 

    this.setState(newState)
  }
  


  render() {

    return (
      <div className="App">
      <h1>IronContacts</h1>
      <div className="controller">
      <div className="App-header">
      <FunctionButton functionProp={this.addRandomContact}>Add Random Contacts</FunctionButton>
      <FunctionButton functionProp={this.sortByName}>Sort by name</FunctionButton>
      <FunctionButton functionProp={this.sortByPopularity}>Sort by popularity</FunctionButton>
      </div>
     
      </div>
     
      <ContactTable deleteProp={this.deleteContact} contactsProp={this.state.list}/>
      </div>
    );
  }
}

export default App;