import React, { Component, Fragment } from 'react';
import './App.css';
import contacts from "./contacts.json"
import Contact from './components/Contact'

class App extends Component {
  state = {
  }

  componentWillMount(){
    let initContacts = []
    for(let i = 0; i < 5; i++){
      initContacts.push(contacts[i])
    }
    this.setState({contacts:initContacts})
  }
  
  deleteFunc = e => {
    let currContacts = this.state.contacts
    currContacts.splice(e.currentTarget.name,1)
    this.setState({
      contacts:currContacts
    })
  }

  drawContacts = () => {
    const {contacts} = this.state
    return contacts.map((contact,idx)=><Contact key={idx} arrayPos={idx} deleteFunc={this.deleteFunc} {...contact}/>)
  }

  addRandom = () => {
    let randContact = contacts[Math.floor(Math.random()*contacts.length)+4]
    let currContacts = this.state.contacts
    currContacts.push(randContact)
    this.setState({
      contacts:currContacts
    })
  }

  compareName = (a,b) => {
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
  }

  sortByName = () => {
    let currContacts = this.state.contacts
    currContacts.sort(this.compareName)
    this.setState({
      contacts:currContacts
    })
  }

  comparePopularity = (a,b) => {
    if(a.popularity > b.popularity) return -1
    if(a.popularity < b.popularity) return 1
    return 0
  }

  sortByPopularity = () => {
    let currContacts = this.state.contacts
    currContacts.sort(this.comparePopularity)
    this.setState({
      contacts:currContacts
    })
  }

  render() {
    const {addRandom, sortByName, sortByPopularity} = this
    return (
      <Fragment>
        <h1>Iron Contacts</h1>
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        {this.drawContacts()}
      </Fragment>
    )
  }
}

export default App;
