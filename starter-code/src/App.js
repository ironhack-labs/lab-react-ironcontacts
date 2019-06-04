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

  myFiveContacts = () => this.state.fiveContacts.map((artist, idx) => <Card key={idx} {...artist} />)

  render() {

    return (

      <div>
        <h1>Ironcontacts</h1>
        <button onClick={() => this.getRamdomContact()}>Add Random contact</button>


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
