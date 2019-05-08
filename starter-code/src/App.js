import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import ContactsComponent from './ContactsComponent'

class App extends Component {
  contactsSlided = contacts.slice(0, 5)

  state = {
    data: this.contactsSlided
  }

  addRandomContact = () => {
    const newContacts = [...this.state.data]
    const filteredContacts = contacts.filter(el => !newContacts.includes(el))
    const contact =
      filteredContacts[Math.floor(Math.random() * filteredContacts.length)]
    console.log(filteredContacts)
    if (filteredContacts.length === 1) {
      return
    } else {
      newContacts.push(contact)
    }
    this.setState({ data: newContacts })
  }

  sortByName = () => {
    const newContacts = [...this.state.data]
    const sortedContacts = newContacts.sort((a, b) =>
      a.name < b.name ? -1 : 1
    )
    console.log(sortedContacts)
    this.setState({ data: sortedContacts })
  }

  sortByPopularity = () => {
    const newContacts = [...this.state.data]
    const sortedContacts = newContacts.sort((a, b) =>
      a.popularity < b.popularity ? -1 : 1
    )
    this.setState({ data: sortedContacts })
  }

  handleDelete = artistIndex => {
    const newContacts = this.state.data
    newContacts.splice(artistIndex, 1)
    this.setState({ data: newContacts })
    console.log(newContacts)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div className="cardsContainer">
          {this.state.data.map((el, index) => {
            return (
              <ContactsComponent
                key={index}
                {...el}
                clickToDelete={() => this.handleDelete(index)}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
