import React, { Component } from 'react'
import contacts from '../../contacts.json'
import DisplayList from '../DisplayList/DisplayList'
import Button from '../Button/Button'
import './ContactList.css'

let contactsArr = contacts.slice(0, 5)
let contactArrLeft = contacts.slice(5)

class ContactList extends Component {
  constructor() {
    super()

    this.state = {
      contact: contactsArr,
    }
  }

  displayContacts = () => {
    const { contact } = this.state

    return contact.map((cntct, idx) => {
      return (
        <DisplayList
          {...cntct}
          deleteContact={(id) => this.deleteContact(id)}
          key={idx}
        />
      )
    })
  }

  addRandom = () => {
    if (contactArrLeft.length > 0) {
      let random = Math.floor(Math.random() * contactArrLeft.length)

      contactsArr.unshift(contactArrLeft[random])
      contactArrLeft.splice(random, 1)

      this.setState({
        contact: contactsArr,
      })
    }
  }

  sortByName = () => {
    contactsArr.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      contact: contactsArr,
    })
  }

  sortByPopularity = () => {
    contactsArr.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      contact: contactsArr,
    })
  }

  deleteContact = (id) => {
    this.setState({
      contact: this.state.contact.filter((contact) => contact.id !== id),
    })
  }

  render() {
    return (
      <div className="contact-card">
        <h1>IronContacts</h1>
        <div className="btn-container">
          <Button func={this.addRandom}>Add Random Contact</Button>
          <Button func={this.sortByName}>Sort by Name</Button>
          <Button func={this.sortByPopularity}>Sort by Popularity</Button>
        </div>
        <hr />
        {this.displayContacts()}
      </div>
    )
  }
}

export default ContactList
