import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import contacts from './contacts.json'
import IdCard from './components/IdCard'

class App extends Component {
  state = {
    contactsArray: contacts.slice(0, 5),
  }
  render() {
    return (
      <div>
        {this.state.contactsArray.map((contact) => (
          <IdCard
            name={contact.name}
            pictureUrl={contact.pictureUrl}
            popularity={contact.popularity}
          />
        ))}
      </div>
    )
  }
}

export default App
