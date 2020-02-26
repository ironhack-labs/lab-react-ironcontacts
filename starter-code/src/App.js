import React, { Component } from 'react';
import './App.css';
import Contacts from "../src/contacts.json"
import ContactLine from "./components/ContactLine/ContactLine"

let shortContacts = [...Contacts].splice(0, 3)

class App extends Component {

  constructor() {
    super()

    this.state = { contactList: shortContacts }

  }


  addOneContact = () => {

    const copyContacts = [...this.state.contactList]

    copyContacts.push(Contacts[Math.round(Math.random() * Contacts.length)])

    this.setState({ contactList: copyContacts })

  }


  SortByName = () => {

    const copyContacts = [...this.state.contactList]

    copyContacts.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({ contactList: copyContacts })

  }


  SortByName = () => {

    const copyContacts = [...this.state.contactList]

    copyContacts.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({ contactList: copyContacts })

  }


  SortByPopularity = () => {

    const copyContacts = [...this.state.contactList]

    copyContacts.sort((a, b) => a.popularity - b.popularity)

    this.setState({ contactList: copyContacts })

  }

  deleteContact = (idx) => {


    const copyContacts = [...this.state.contactList]

    copyContacts.splice(idx, 1)

    this.setState({ contactList: copyContacts })

  }








  render() {
    return (
      <main>
        <h1>ALL IS CODE... ALL!</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>

          {this.state.contactList.map((elm, idx) => <ContactLine key={idx} {...elm} deleteContact={() => this.deleteContact(idx)}  ></ContactLine>)}

        </table>
        <button onClick={this.addOneContact}>Add 1 contact</button>
        <button onClick={this.SortByName}>Sort by Name</button>
        <button onClick={this.SortByPopularity}>Sort by popularity</button>
      </main>
    );
  }
}

export default App;
