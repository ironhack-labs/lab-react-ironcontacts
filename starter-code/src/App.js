import React, { Component } from 'react'
import contacts from './contacts.json'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [...contacts.splice(0, 5)],
    }
  }

  addRandomContact = () => {
    const copy = [...this.state.contacts]
    copy.push(contacts[Math.floor(Math.random() * contacts.length) + 5])
    this.setState({ contacts: copy })
  }

  sortByName = () => {
    const copy = [...this.state.contacts]
    copy.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    this.setState({ contacts: copy })
  }

  sortByPopularity = () => {
    const copy = [...this.state.contacts]
    copy.sort(function (a, b) {
      return (b.popularity - a.popularity)
    })
    this.setState({ contacts: copy })
  }

  removeContact = idx => {
    const copy = [...this.state.contacts]
    copy.splice(idx, 1)
    this.setState({ contacts: copy })
  }

  render() {
    return (
      <main>
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact} >Add Random Contact</button>
        <button onClick={this.sortByName} >Sort By Name</button>
        <button onClick={this.sortByPopularity} >Sort By Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Delete</th>
          </tr>
          {this.state.contacts.map((elm, idx) => {
            return (
              <tr key={idx}>
                <td><img src={elm.pictureUrl} alt={elm.name}></img></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td><button onClick={this.removeContact}>Delete</button></td>
              </tr>
            )
          })}
        </table>
      </main>
    )
  }
}

export default App
