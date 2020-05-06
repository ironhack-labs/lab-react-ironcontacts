import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import IdCard from './components/IdCard'
import Button from './components/Button'

class App extends Component {
  state = {
    contactsArray: contacts.slice(0, 5),
  }
  addRandom = () => {
    const { contactsArray } = this.state
    const randomContact = contacts[Math.floor(Math.random() * (contacts.length - 6) + 5)]
    contactsArray.push(randomContact)
    console.log(contactsArray)
    this.setState({ contactsArray })
  }

  sortName = () => {
    const { contactsArray } = this.state
    contactsArray.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ contactsArray })
  }

  sortPop = () => {
    const { contactsArray } = this.state
    contactsArray.sort((a, b) =>
      a.popularity > b.popularity ? -1 : a.popularity === b.popularity ? 0 : 1
    )
    this.setState({ contactsArray })
  }
  deleteContact = (e, id) => {
    const { contactsArray } = this.state
    contactsArray.splice(id, 1)

    this.setState({ contactsArray })
  }
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <Button fcn={this.addRandom} value="Add Random Contact" />
        <Button fcn={this.sortName} value="Sort by name" />
        <Button fcn={this.sortPop} value="Sort by Popularity" />
        <p></p>
        {this.state.contactsArray.map((contact) => (
          <IdCard
            key={contact.id}
            name={contact.name}
            pictureUrl={contact.pictureUrl}
            popularity={contact.popularity}
            fcn={(e) => this.deleteContact(e, contact.id)}
          />
        ))}
      </div>
    )
  }
}

export default App
