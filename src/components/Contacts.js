import React, { Component } from 'react'
import contactsImport from '../contacts.json'
import ContactTable from './ContactTable'


class ContactList extends Component {

  constructor() {
    super()

    this.state = {
      // contacts: contactsImport.slice(0,5),
      newContactsArr: contactsImport.slice(0,5)
    }
  }

  addContact() {
    const { newContactsArr } = this.state
    newContactsArr.push(newContactsArr[Math.floor(Math.random()*newContactsArr.length)])
    this.setState({newContactsArr: newContactsArr})
  }

  sortAlpha() {
    const { newContactsArr } = this.state
    const sortedContacts = newContactsArr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    this.setState({contacts: sortedContacts})
  }

  sortScore () {
    const { newContactsArr } = this.state
    const sortedContacts = newContactsArr.sort((a, b) => {
      return b.popularity - a.popularity;
    })
    this.setState({contacts: sortedContacts})
  }

  killContact(contactID) {
    const newContactsArrFilter = this.state.newContactsArr.filter(contact => contact.id !== contactID)
    this.setState({
      newContactsArr: newContactsArrFilter
    })
  }


  render() {    

    console.log(this.state.contacts)

    
    return (      
      <div className="bigdiv">
      <button onClick={() => this.addContact()}>
        Add Contact
      </button>
      <button onClick={() => this.sortAlpha()}>
        Sort Alphabetically
      </button>
      <button onClick={() => this.sortScore()}>
        Sort Scorically
      </button>
      <table>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Action</th>

      {this.state.newContactsArr.map(eachContact => <ContactTable key={eachContact.id} {...eachContact} killContact={() => this.killContact(eachContact.id)} />)
        }
      </table>
      </div>
     )
  }
}

export default ContactList