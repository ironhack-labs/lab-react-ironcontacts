import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsFromDB from "./contacts.json"
import Table from "./components/Table"
import MagicButton from "./components/MagicButton"

class App extends Component {
  state = {
    contacts: contactsFromDB.filter((contact, i)=> i<5),
  }
  
  
  render() {
    
    const addRandomContact = () => {
      this.setState
      ({contacts: [...this.state.contacts.concat([
        contactsFromDB[Math.floor(Math.random()*contactsFromDB.length)]
      ])]})
    }
    
    
    
    const sortByName = () => {
      this.setState
      ({contacts:  this.state.contacts.sort((a, b)=>{
        if(a.name<b.name){
          return -1
        } else {
          return 1
        }
      })
    })
  }
  
  
  
  const sortByPopularity = () => {
    this.setState
    ({contacts:  this.state.contacts.sort((a, b)=>{
      if(a.popularity>b.popularity){
        return -1
      } else {
        return 1
      }
    })
  })
}



const deleteMe = (contactName) => {
  this.state.contacts.forEach((contact, i) => {
    if(contact.name==contactName) {
      const contactsCopy = [...this.state.contacts]
      contactsCopy.splice(i, 1)
      this.setState({contacts: contactsCopy})
    }
  })
}



return (
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="sort-btns-div">
          <MagicButton  
            funcion = {addRandomContact} text="Add random contact"/>
          <MagicButton
            funcion = {sortByName} text="Sort by name"/>
          <MagicButton
            funcion = {sortByPopularity} text="Sort by popularity"/>
        </div>
        <Table contacts={this.state.contacts}>
          {deleteMe}
        </Table>
      </div>
    )
  }
}

export default App;