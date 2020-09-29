import React, { Component } from 'react'
import contacts from '.././contacts.json'
import ContactList from './Contact-list'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      initialContacts: contacts.slice(0, 5)
    }
  }



  random = () => contacts[Math.floor(contacts.length * Math.random())]

  addRandom = newContact => {

    const contactsCopy = [...this.state.initialContacts]
    contactsCopy.push(newContact)
    this.setState({
      initialContacts: contactsCopy
    })
  }



  sortName = () => {

    const contactsCopy = [...this.state.initialContacts]
    contactsCopy.sort((a, b) => a.name > b.name ? 1 : -1)
    this.setState({
      initialContacts: contactsCopy

    })

  }


  sortPopularity = () => {

    const contactsCopy = [...this.state.initialContacts]
    contactsCopy.sort((a, b) => a.popularity > b.popularity ? 1 : -1)
    this.setState({
      initialContacts: contactsCopy
    })
  }



  removeContact = contactId => {
    this.setState({
      initialContacts: this.state.initialContacts.filter(elm => elm.id !== contactId)
  })
  }



  render() {

    return (
      <>
        <div className='centerBtn'>
        <h1>Iron Contacts</h1>
          <button className='headerBtn' onClick={() => { this.addRandom(this.random()) }}>Add Random Contact</button>
          <button className='headerBtn' onClick={() => { this.sortName() }}>Sort By Name</button>
          <button className='headerBtn' onClick={() => { this.sortPopularity() }}>Sort By Popularity</button>

        </div>


        <table >
          <thead>
            <tr className='big'>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>

            </tr>
          </thead>

          <tbody className='box'>

            {this.state.initialContacts.map(elm => <ContactList key={elm.id} {...elm} deleteContact={() => this.removeContact(elm.id)} />)}

          </tbody>
        </table>
      </>
    )
  }
}

export default App;

