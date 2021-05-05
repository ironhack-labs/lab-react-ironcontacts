import React, { Component } from 'react'
import './App.css';
import contacts from "./contacts.json";

export default class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  }

  addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * (contacts.length + 1))]

    this.setState(state => ({
      contacts: [randomContact, ...state.contacts]
    }))
  }

  sortByName = () => {
    this.setState(state => ({
      contacts: state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    }))
  }

  sortByPopularity = () => {
    this.setState(state => ({
      contacts: state.contacts.sort((a, b) => b.popularity - a.popularity)
    }))
  }

  delete = (contactId) => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId)
    }))
  }
 
  render() {
    const list = this.state.contacts.map(contact => (<tr key={contact.id}>
      <th><img style={{height: '100px'}} src={contact.pictureUrl} alt=""/></th>
      <th>{contact.name}</th>
      <th>{contact.popularity}</th>
      <th><button onClick={() => {this.delete(contact.id)}}>Delete</button></th>
    </tr>))

    const myStyle = {
      display: 'flex',
      justifyContent: 'center'
    }

    return (
      <div style={myStyle}>
        <div>
          <h1>IronContacts</h1>
          <button onClick={this.addRandom}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
