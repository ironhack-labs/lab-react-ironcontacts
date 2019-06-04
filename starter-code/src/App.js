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

    this.myFiveContacts = this.state.fiveContacts.map((artist, idx) => <Card key={idx} {...artist} />)


  }
  render() {

    return (
      <div>
        {this.myFiveContacts}

      </div>
    )

  }
}

export default App;
