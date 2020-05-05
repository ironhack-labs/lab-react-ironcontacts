import React, { Component } from 'react';
import './App.css';
import Contacts from '../contacts.json';
import Card from './cards/Card'

const contactsArr = [...Contacts]
const contactsLength = contactsArr.length

class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contactsArr.splice(0, 5)
    }
  }

  getRandomContact = () => {
    let i = Math.round(Math.random() * contactsLength)
    this.state.contacts.push(contactsArr[i])
    this.setState({})
  }


  sortByName = () => {
    this.state.contacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    this.setState({})
  }

  sortByPopularity = () => {
    this.state.contacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1
      }
      if (a.popularity < b.popularity) {
        return 1
      }
      return 0
    })
    this.setState({})
  }

  removeContactFromHere = idx => {
    this.state.contacts.splice(idx, 1)
    this.setState({})
  }

  render() {
    return (
      <main className="App">
        <h1 className="contacts">IronContacts</h1>
        <button className="button1" onClick={this.getRandomContact}>
          Random Contact!
        </button>
        <button className="button2" onClick={this.sortByName}>
          Sort by Name
        </button>
        <button className="button2" onClick={this.sortByPopularity}>
          Sort by Popularity
        </button>

        <br></br>

        <table>
          <thead>
            <tr>
              <th><h3>Picture</h3></th>
              <th><h3>Name</h3></th>
              <th><h3>Popularity</h3></th>
              <th><h3>Action</h3></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((elm, idx) => <Card key={idx} {...elm} removeContact={() => this.removeContactFromHere(idx)} />)
            }
          </tbody>
        </table>
      </main>
    )
  }
}

export default App;
