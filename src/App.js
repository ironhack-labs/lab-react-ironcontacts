import React, { Component } from 'react'
import contacts from './contacts.json'

export default class App extends Component {
  state = {
    contacts: contacts,
    newContacts: contacts.slice(0,5),
  }

  addRandomContact = (min,max) => {
    const randomNumber = Math.floor(Math.random() *(max - min + 1) + min)
    const randomContact =  this.state.contacts[randomNumber]
    // console.log(randomContact)
    this.setState({newContacts: this.state.newContacts.concat(randomContact)})
  }

  sortByName = () => {
    const nameSorted = this.state.newContacts.sort((a,b) => {
      if (a.name < b.name) {
        return -1
      } if(a.name > b.name) {
        return 1
      }
      return 0
      }
    )
    // console.log(nameSorted)
    this.setState({newContacts: nameSorted})
  }

  sortByPopularity = () => {
    const popularitySorted = this.state.newContacts.sort((a,b) => b.popularity - a.popularity)
    // console.log(popularitySorted)
    this.setState({newContacts: popularitySorted})
  }

  deleteContact = (contactId) => {
    const contactsExclDeletedContact = this.state.newContacts.filter(contact => contact.id !== contactId)
    // console.log(contactsExclDeletedContact)
    this.setState({newContacts: contactsExclDeletedContact})
  }

  render() {
    const min = this.state.newContacts.length
    const max = this.state.contacts.length-1
    // console.log(min)
    // console.log(max)
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact(min, max)}>Add Random Contact</button>
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
            {this.state.newContacts.map((contact) => {
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