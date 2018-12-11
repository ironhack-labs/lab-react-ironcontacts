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

  render() {
    console.log(this.state.contacts)
    return (
      <Fragment>
        <h1>Iron Contacts</h1>
        {this.drawContacts()}
      </Fragment>
    )
  }
}

export default App;
