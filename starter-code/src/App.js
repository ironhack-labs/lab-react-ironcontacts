import React, { Component } from 'react'
import contacts from './contacts.json'
import './App.css'
import TableRow from './components/tableRow/tableRow'

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [...contacts].slice(0, 5),
    }
  }

  addRandomContact = () => {
    let stateContacts = [...this.state.contacts]
    const randomNumber = Math.floor(Math.random() * contacts.length)
    const newContact = [...contacts][randomNumber]
    let isRepeated = false

    stateContacts.forEach((elm) => {
      if (elm.id === newContact.id) {
        isRepeated = true
      }
    })

    if (isRepeated === false) {
      stateContacts.push(newContact)
    }

    this.setState({ contacts: stateContacts })
  }

  sortContactsByName = () => {
    let stateContacts = [...this.state.contacts]
    stateContacts.sort((a, b) => {
      const textA = a.name.toUpperCase()
      const textB = b.name.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
    this.setState({ contacts: stateContacts })
  }

  sortContactsByPopularity = () => {
    let stateContacts = [...this.state.contacts]
    stateContacts.sort((a, b) =>
      a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0
    )
    this.setState({ contacts: stateContacts })
  }

  removeContact = (idx) => {
    let stateContacts = [...this.state.contacts]
    console.log(`BEFORE: ${stateContacts.length}`)
    stateContacts.splice(idx, 1)
    console.log(`AFTER: ${stateContacts.length}`)
    this.setState({contacts: stateContacts})
  }

  render() {
    return (
      <main>
        <div className="button-container">
          <button onClick={this.sortContactsByPopularity}>
            Sort by popularity
          </button>
          <button onClick={this.sortContactsByName}>Sort by name</button>
          <button onClick={this.addRandomContact}>
            Add new random contact
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>
                <p>Image</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Popularity</p>
              </th>
              <th>
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((elm, idx) => (
              <TableRow
                key={idx}
                name={elm.name}
                pictureUrl={elm.pictureUrl}
                popularity={elm.popularity}
                removeElm={() => this.removeContact(idx)}
              />
            ))}
          </tbody>
        </table>
      </main>
    )
  }
}

export default App
