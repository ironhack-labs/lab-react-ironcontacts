import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json'
import Contacts from './Contacts';


class App extends Component{
  constructor(props) {
    super(props)
      this.state = {
        myContacts : contactsData.slice(0,5)
      }
  }

  addNewActor() {
    let newContacts = [...this.state.myContacts]
    let randomActors = contactsData[Math.floor(Math.random()*contactsData.length)]

    newContacts.push(randomActors)
    this.setState({
      ...this.state,
      myContacts: newContacts
    })
  }

  sortByName() {
    let sortNameContacts = [...this.state.myContacts];

    sortNameContacts.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  this.setState({
    ...this.state,
    myContacts: sortNameContacts
  })
  }

  sortByPopularity() {
    let sortPopularityContacts = [...this.state.myContacts];

    sortPopularityContacts.sort(function(a,b){
      return b.popularity - a.popularity;
    })
    this.setState({
      ...this.state,
      myContacts: sortPopularityContacts
    })
  }

  removeActor(name) {
    console.log(this.state)
    this.setState({
      myContacts: this.state.myContacts.filter(contact => contact.name !== name )
    })
  }

render() {
  return (
  <React.Fragment>
    <Contacts contacts = {this.state.myContacts} removeActor = {() => this.removeActor}/>
    <button onClick={() => this.addNewActor()}>Add New Actor</button>
    <button onClick={() => this.sortByName()}>Sort by name</button>
    <button onClick={() => this.sortByPopularity()}>Sort by popurality</button>
    
    
  </React.Fragment>
    
  )
}

}

export default App;
 