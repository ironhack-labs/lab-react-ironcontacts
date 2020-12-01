import './App.css';
import React, { Component } from 'react'
import ContactsTable from './contactsTable/ContactsTable'
import Contacts from './../contacts.json'

class App extends Component {

  constructor() {

    super()

    this.state = {

      contactList: Contacts.slice(0, 5)
      
    }

  }

  addNewRandom = () => {

    const newCeleb = Contacts[Math.floor(Math.random() * (this.state.contactList.length - Contacts.length) + Contacts.length)]

    const copyContacts = [...this.state.contactList]

    const repeated = copyContacts.find(elm => elm.id === newCeleb.id)

    if (!repeated) {

      copyContacts.push(newCeleb)

    }

    this.setState({

      contactList: copyContacts

    })

  }

  sortByName = () => {

    const copyContacts = [...this.state.contactList]

    const sortedContacts = copyContacts.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({

      contactList: sortedContacts

    })

  }

  sortByPopularity = () => {

    const copyContacts = [...this.state.contactList]

    const sortedContacts = copyContacts.sort((a, b) => b.popularity - a.popularity)

    this.setState({

      contactList: sortedContacts

    })

  }

  deleteContact = contactToDelete => {

    this.setState({

      contactList: this.state.contactList.filter(elm => elm.id !== contactToDelete)

    })

  }


  render() {

    return (

      <main>

        <div className="first-content">

          <h1>Ironhack Contacts</h1>

          <div className="buttons">
            <button className="button is-primary" onClick={this.addNewRandom}>Add new contact</button>
            <button className="button is-info" onClick={this.sortByName}>Sort by name</button>
            <button className="button is-info" onClick={this.sortByPopularity}>Sort by popularity</button>
          </div>

        </div>
        <section>
          <ContactsTable info={this.state.contactList} removeContact={elementToDelete => this.deleteContact(elementToDelete)} />
        </section>

      </main>

    )

  }
}


export default App;
