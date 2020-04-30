import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import Header from './components/Header'
import Table from './components/Table'

class App extends Component {
  constructor() {
    super()

    this.state = {
      contactsArr: contacts.splice(0, 5),
    }

    this.addRandom = this.addRandom.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.sortByPopularity = this.sortByPopularity.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  addRandom() {
    const randNum = Math.floor(Math.random() * contacts.length)
    const contactsArrCopy = [...this.state.contactsArr]
    contactsArrCopy.push(contacts[randNum])
    contacts.splice(randNum, 1)

    this.setState({
      contactsArr: contactsArrCopy,
    })
  }

  sortByName() {
    const contactsArrCopy = [...this.state.contactsArr]
    contactsArrCopy.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({
      contactsArr: contactsArrCopy,
    })
  }

  sortByPopularity() {
    const contactsArrCopy = [...this.state.contactsArr]
    contactsArrCopy.sort((a, b) => b.popularity - a.popularity)

    this.setState({
      contactsArr: contactsArrCopy,
    })
  }

  deleteContact(idx) {
    console.log('test')
    const contactsArrCopy = [...this.state.contactsArr]

    contactsArrCopy.splice(idx, 1)

    this.setState({
      contactsArr: contactsArrCopy,
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          addRandom={this.addRandom}
          sortByName={this.sortByName}
          sortByPopularity={this.sortByPopularity}
        />
        <Table contactsArr={this.state.contactsArr} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}

export default App
