import React, { Component } from 'react'
import AllContacts from '../../data/contacts.json'
import ContactItem from './ContactItem.js'
import AddContactBtn from './AddContact.js'
import './ContactList.css'
import SortByNameButton from './SortByName.js'
import SortByPopularityButton from './SortByPopularity.js'

class ContactList extends Component {

  state = {
    contacts: AllContacts.slice(0, 5)
  }

  componentDidMount() {
  }

  // const ironContact = Contacts.map((contact, index) => (
  //   <ContactItem
  //     key={index}
  // {...contact}
  //   />
  // ))

  // return (
  //   <div className="contacts-container">
  //     {ironContact.length > 0 ? ironContact : 'Loading...'}
  //   </div>
  // )

  addContact() {
    const filteredContacts = AllContacts.filter(contact => !this.state.contacts.some(c => c.id === contact.id))
    const randomNumber = Math.floor(Math.random() * filteredContacts.length) + 1
    this.setState({
      contacts: [...this.state.contacts, filteredContacts[randomNumber]]
    })
  }

  sortByName() {
    this.setState({
      contacts: this.state.contacts.sort((c1, c2) => {
        return c1.name > c2.name ? 1 : -1
      })
    })
  }

  sortByPopularity() {
    this.setState({
      contacts: this.state.contacts.sort((c1, c2) => {
        return c1.popularity - c2.popularity
      })
    })
  }

  // ESTO ES IGUAL QUE LO DE ARRIBA
  render() {
    return (
      <div className="all-container">
        <div className="buttons-container">
          <AddContactBtn addContact={() => this.addContact()} />
          <SortByNameButton sortByName={() => this.sortByName()} />
          <SortByPopularityButton sortByPopularity={() => this.sortByPopularity()} />
        </div>

        <div className="contacts-container">
          {this.state.contacts.map((contact, index) => (
            <ContactItem
              key={index}
              {...contact}
            />
          ))}
        </div>
      </div>

    )
  }
}

export default ContactList