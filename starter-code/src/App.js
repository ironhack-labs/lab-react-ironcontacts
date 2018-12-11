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

  drawContacts = () => {
    const {contacts} = this.state
    return contacts.map((contact,idx)=><Contact key={idx}{...contact}/>)
  }

  addRandom = () => {
    let randContact = contacts[Math.floor(Math.random()*contacts.length)+4]
    let currContacts = this.state.contacts
    currContacts.push(randContact)
    this.setState({
      contacts:currContacts
    })
  }

  render() {
    console.log(this.state.contacts)
    const {addRandom} = this
    return (
      <Fragment>
        <h1>Iron Contacts</h1>
        <button onClick={addRandom}>Add Random Contact</button>
        {this.drawContacts()}
      </Fragment>
    )
  }
}

export default App;
