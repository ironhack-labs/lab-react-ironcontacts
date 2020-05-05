import React, { Component } from 'react'
import './App.css'
import contacts from '../contacts.json'
import Contact from './contacts/Contact'

class App extends Component {
  constructor() {
    super()
    this.contactsCopy = [...contacts]
    this.state = {
      contactsCopy: contacts.splice(0,5)
    }

  }

  randomContact = () => {
    let randomNum = Math.floor(Math.random() * (contacts.length + 1))
    this.state.contactsCopy.push(contacts[randomNum])
    this.setState({})
  }

  sortByName = () => {
    this.state.contactsCopy.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    this.setState({})
  }

  sortByPopularity = () => {
    this.state.contactsCopy.sort(function (a,b){
      return (b.popularity - a.popularity)
    })
    this.setState({})
  }

  removeContact = id => {
    this.state.contactsCopy.splice(id, 1)
    this.setState({})
  }

  render() {
    return (
      <>
      <h1>IronContacts</h1>

    <button className="btn-random" onClick={this.randomContact}>Add Random Contact</button>
    <button className="btn-random" onClick={this.sortByName}>Sort by name</button>
    <button className="btn-random" onClick={this.sortByPopularity}>Sort by popularity</button>
    <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
      <tbody>
      {this.state.contactsCopy.map((elm) =>  <Contact key={elm.id} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity} removeContact={() => this.removeContact(elm.id)}/>) }
      </tbody>
    </table>
      </>

    )
  }
}

export default App;
