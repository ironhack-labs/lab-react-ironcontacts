import React, { Component } from 'react'
import contactsImport from '../contacts.json'
import ContactTable from './ContactTable'


class ContactList extends Component {

  constructor() {
    super()

    this.state = {
      contacts: contactsImport.slice(0,5),
      newContactsArr: contactsImport.slice(0,5)
    }
  }

  addContact() {
    const { contacts } = this.state
    contacts.push(contacts[Math.floor(Math.random()*contacts.length)])
    this.setState({contacts: contacts})
  }

  sortAlpha() {
    const { contacts } = this.state
    const sortedContacts = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    this.setState({contacts: sortedContacts})
  }

  sortScore () {
    const { contacts } = this.state
    const sortedContacts = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    })
    this.setState({contacts: sortedContacts})
  }

  killContact(contactID) {
    const newContactsArrFilter = this.state.contacts.filter(contact => contact.id !== contactID)
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

{/* Si se usa el state de arriba funcionan los botones de ordenar, si se usa el de abajo funciona el boton de borrar */}
{/* No sé cómo hacer que funcionen los dos a la vez :( */}

      {this.state.contacts.map(eachContact => <ContactTable key={eachContact.id} {...eachContact} />)}
      {/* {this.state.newContactsArr.map(eachContact => <ContactTable key={eachContact.id} {...eachContact} killContact={() => this.killContact(eachContact.id)} />)
        } */}
      </table>
      </div>
     )
  }
}

export default ContactList