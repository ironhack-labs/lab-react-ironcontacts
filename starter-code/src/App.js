import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import IdCard from './components/IdCard'
import Button from './components/Button'

class App extends Component {
  state = {
    contactsArray: contacts.slice(0, 5),
  }
  addRandom(){
    const randomContact = contacts[Math.floor(Math.random()*(contacts.length - 5) - 4)]
    this.setState({contactsArray: this.state.contactsArray.push(randomContact)})
  }
  render() {
    return (
      <div>
      <h1>IronContacts</h1>
      <Button addRandom={this.state.addRandom}/>
      <p></p>
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
