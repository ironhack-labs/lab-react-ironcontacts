import React, { Component } from 'react'
import './ContactsList.css'
import artists from '../../data/contacts.json'
import Table from '../table/Table'
import ContactRow from '../table/Row'
import Button from '../button/Button'

class Contacts extends Component {
  constructor () {
    super ()
    this.state = {
      contacts: artists.slice(0, 5)
    }
  }

  addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * ((artists.length - 1) - 0))
    this.state.contacts.push(artists[ randomIndex ])
    this.setState({ contacts: this.state.contacts })
  }

  sortByName = () => this.setState({ contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name)) })

  sortByPopularity = () => this.setState({ contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity) })
 
  removeContact = id => this.setState({ contacts: this.state.contacts.filter(elm => elm.id !== id) })

  render() {
    return (
      <section className='contacts-list'>

        <h1>IronContacts</h1>

        <hr />

        <div>
          <Button event={this.addRandomContact} text='Add Random Contact' />
          <Button event={this.sortByName} text='Sort By Name' />
          <Button event={this.sortByPopularity} text='Sort By Popularity' />
        </div>

        <Table content={this.state.contacts.map(elm =>
          <ContactRow key={elm.id} picture={elm.pictureUrl} name={elm.name} popularity={elm.popularity} deleteContact={() => this.removeContact(elm.id)} />)} />

      </section>

    )
  }
}

export default Contacts