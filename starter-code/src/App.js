import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import TableRow from './components/TableRow'

class App extends Component {
  constructor() {
    super()

    this.state = {
      contactsArr: contacts.splice(0, 5),
    }

    this.addRandom = this.addRandom.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.sortByPopularity = this.sortByPopularity.bind(this)
  }

  addRandom() {
    const randNum = Math.floor(Math.random() * contacts.length)
    const contactsArrCopy = [...this.state.contactsArr]
    contactsArrCopy.push(contacts[randNum])

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
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.addRandom}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table className="table-container">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsArr.map((contact, idx) => (
              <TableRow
                key={idx}
                idx={idx}
                picture={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
                deleteContact={() => this.deleteContact(idx)}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
