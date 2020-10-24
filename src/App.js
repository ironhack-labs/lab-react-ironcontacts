import React, { Component } from 'react'
import contactsFromJson from './contacts.json'

export default class App extends Component {
  state = {
    contacts: contactsFromJson.slice(0,5)
  }

  addRandomContact = () => {
    const randomNumber = Math.floor(Math.random() * ((contactsFromJson.length - 1) - this.state.contacts.length +1)+ this.state.contacts.length)
    const randomContact = contactsFromJson[randomNumber]

    this.state.contacts.forEach(contact => {
      if(!this.state.contacts.includes(randomContact)) {
        this.setState({
          contacts: [...this.state.contacts, randomContact] // ...spread operator is copying the array 
        })
      } else {
        console.log('Contact is already present')
      }
    })
  }

  sortByName = () => {
    const contactsSortedByName = this.state.contacts.sort((a,b) =>a.name.localeCompare(b.name))
    this.setState({
      contacts: contactsSortedByName
    })
  }

  sortByPopularity = () => {
    const contactsSortedByPopularity = this.state.contacts.sort((a,b) => b.popularity - a.popularity)
    this.setState({
      contacts: contactsSortedByPopularity
    })
  }

  deleteContact = (contactId) => {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.id !== contactId
    })
    this.setState({
      contacts: filteredContacts
    })
  }

  render() {

    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt=""></img></td>
                  <td>{contact.name}</td>
                  <td>{Math.round(contact.popularity * 100)/100}</td>
                  <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

}