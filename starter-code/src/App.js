import React, { Component } from 'react'
import ContactTable from './components/Contacts table/ContactTable';
import contacts from "./contacts.json"
import FunctionButton from './components/functionButton/FunctionButton';

export default class App extends Component {
  state ={
    list:contacts.slice(0,5)
  }
  addRandomContact = () =>{
    let newState ={
      ...this.state
    }
    newState.list.push(contacts[Math.floor(Math.random()*contacts.length)])

    this.setState(newState)
  }
    render() {
    return (
      <div>
         <h1>IronContacts</h1>
         <FunctionButton functionProp={this.addRandomContact}> Add Random</FunctionButton>
         <div className="controller"></div>
        <ContactTable contactsPro ={this.state.list}/>
        
      </div>
    )
  }
}
