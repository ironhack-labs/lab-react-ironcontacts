import React, {Component} from 'react';
import './App.css';
import ContactTable from './components/ContactTable/ContacTable';
import contacts from "./contacts.json"
import FunctionButton from "./components/FunctionButton/FunctionButton"

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
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
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
    newState.list = newState.list.filter(e => e.name !== name)
    
    this.setState(newState)
  }

  render () {
    return (
      <div>
        <h1>IRON CONTACTS</h1>
        <div className="controller">
        <FunctionButton functionProp={this.addRandomContact}>Add Random Contacts</FunctionButton>
        <FunctionButton functionProp={this.sortByName}>Sort By Name</FunctionButton>
        <FunctionButton functionProp={this.sortByPopularity}>Sort By popularity</FunctionButton>
        </div>
        <div className="container">
       <ContactTable deleteProp={this.deleteContact} contactsProps={this.state.list}/>
       </div>
      </div>
    );
  }
}

export default App;
