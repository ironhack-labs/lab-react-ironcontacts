import React, { Component } from 'react'
import logo from './logo.svg'
import allContacts from './contacts.json'
import Contact from './components/Contact'
import './App.css'

class App extends Component {
  state = {
    contacts: allContacts.slice(0, 5)
  }

  addContact = () => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        allContacts[this.state.contacts.length]
      ]
    })
  }

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => (a.name < b.name ? -1 : 1))
    })
  }

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) =>
        a.popularity < b.popularity ? 1 : -1
      )
    })
  }

  deleteContact = name => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.name !== name)
    })
  }

  deleteAll = () => {
    this.setState({
      contacts: []
    })
  }

  render() {
    const { contacts } = this.state
    return (
      <div>
        <div class="col-md-4 offset-md-4">
          <h1>IronContacts</h1>
        </div>
        <div className="buttons col-md-6 offset-md-3">
          <button class="btn btn-dark" onClick={() => this.addContact()}>
            Add contact
          </button>
          <button class="btn btn-dark" onClick={() => this.sortByName()}>
            Sort by Name
          </button>
          <button class="btn btn-dark" onClick={() => this.sortByPopularity()}>
            Sort by Popularity
          </button>
          <button class="btn btn-dark" onClick={() => this.deleteAll()}>
            Delete all
          </button>
        </div>
        <div class="container col-md-4 offset-md-4">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 && <p>No hay data </p>}
              {contacts.map((contact, i) => (
                <Contact
                  key={i}
                  contactInfo={contact}
                  deleteOne={this.deleteContact}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App
