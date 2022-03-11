import React, { Component } from 'react'
import logo from './logo.svg';
import contacts  from "./contacts.json";
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
let contactsCopy = contacts.slice(0, 5)

class App extends Component {
    constructor() {
      super()

    this.state = {
      arrContacts: contactsCopy
    }

  }

    addContact = () => {
      const newArr = contacts.slice(this.state.arrContacts.length, contacts.length)
      const newElement = newArr[Math.floor(Math.random() * (contacts.length - this.state.arrContacts.length))]
      const newArray = this.state.arrContacts
      newArray.push(newElement)
      // console.log(newArray)
      this.setState({
       arrContacts: newArray
      })
  }

    sortByName = () => {  
      contactsCopy.sort((a, b) => a.name.localeCompare(b.name))

      this.setState({
        arrContacts: contactsCopy
      })
    }

    sortByPopularity = () => {
     contactsCopy.sort((a, b) => b.popularity - a.popularity)

      this.setState({
        arrContacts: contactsCopy
      })
    }

    removeContact = (contactId) => {
      const newContact = this.state.arrContacts.filter(contact => contact.id !== contactId)

      this.setState({
        arrContacts: newContact
      })
    }

  render() {
    return (
    <div class="App">
      <h1>IronContacts</h1>

      <button onClick={() => this.addContact()}>Add Random Contact</button>
      <button onClick={() => this.sortByName()}>Sort by name</button>
      <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

          {this.state.arrContacts.map((eachContact) => 
          <tr>
            <td> <img src={eachContact.pictureUrl} /> </td>
            <td> {eachContact.name} </td>
            <td> {eachContact.popularity} </td>
            <td> <button onClick={() => this.removeContact(eachContact.id)}>Delete</button> </td>
          </tr>
          )}  
      </table>
    </div>
  )
}
}
