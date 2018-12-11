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

  compare = (a,b, query="popularity", order=1) => {
    if(a[query] < b[query]) return order
    if(a[query] > b[query]) return -order
    return 0
  }

  sortByName = () => {
    let currContacts = this.state.contacts
    currContacts.sort((a, b)=>this.compare(a, b, "name", -1))
    this.setState({
      contacts:currContacts
    })
  }

  sortByPopularity = () => {
    let currContacts = this.state.contacts
    currContacts.sort((a, b)=>this.compare(a, b))
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
