import React, { Component } from 'react';

import contacts from './contacts.json'
import './App.css';

import Card from './components/stateless/ContactCard'

let arrContacts = contacts.slice(0, 5)

class App extends Component {

  constructor() {

    super()

    this.state = {
      fiveContacts: arrContacts
    }




  }
  getRamdomContact = () => {
    let newContacts = [...contacts]
    let randomContact = newContacts[Math.floor(Math.random() * (newContacts.length))]
    const _fiveContacts = [...this.state.fiveContacts];
    _fiveContacts.push(randomContact)
    this.setState({
      fiveContacts: _fiveContacts
    })
  }

  myFiveContacts = () => this.state.fiveContacts.map((artist, idx) => <Card key={idx} {...artist} removeContactFromState={() => this.deleteContact(idx)} />)

  sortByName = (a, b) => {
    const _fiveContacts = [...this.state.fiveContacts];
    _fiveContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0
    })

    this.setState({
      fiveContacts: _fiveContacts
    })


  }


  sortByPopularity = (a, b) => {
    const _fiveContacts = [...this.state.fiveContacts];
    _fiveContacts.sort((a, b) => b.popularity - a.popularity)

    this.setState({
      fiveContacts: _fiveContacts
    })


  }

  deleteContact = idx => {
    const _fiveContacts = [...this.state.fiveContacts];
    _fiveContacts.splice(idx, 1)
    this.setState({
      fiveContacts: _fiveContacts
    })
  }




  render() {

    return (

      <div>
        <h1>Ironcontacts</h1>
        <button onClick={() => this.getRamdomContact()}>Add Random contact</button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>

          </tr>
          {this.myFiveContacts()}
        </table>

      </div>

    )

  }
}

export default App;
