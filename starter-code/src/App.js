import React, { Component } from 'react'
import contacts from './contacts.json'
import './App.css';

class App extends Component {

  state = {
    contacts: contacts,
    initialContacts: contacts.slice(0, 5)
  }

  contactsComponent = () => {
    let contactsCopy = this.state.initialContacts.map((contact, i) => {
      return (
        <tbody key={i}>
          <tr>
            <th scope="row">
              <img src={contact.pictureUrl} alt="img" width="75em" />
            </th>
            <td>{contact.name}
            </td>
            <td>{contact.popularity}
              <button onClick={() => { this.removeContact(i) }}>X</button>
            </td>
          </tr>
        </tbody>
      )
    })
    return contactsCopy
  }

  addContact = () => {
    let contacts = this.state.contacts
    let initialContacts = this.state.initialContacts
    let random = contacts[Math.floor(Math.random() * contacts.length)]
    if (initialContacts.includes(random)) {
      this.addContact();
    }
    else {
      initialContacts.push(random)
      this.setState({
        initialContacts
      })
    }
    // console.log(random)

  }

  sortByName = () => {
    let contacts = this.state.initialContacts
    this.setState({
      initialContacts: contacts.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      })
    })
  }

  sortByPopularity = () => {
    let contacts = this.state.initialContacts
    this.setState({
      initialContacts: contacts.sort((a, b) => {
        return a.popularity < b.popularity ? -1 : a.popularity > b.popularity ? 1 : 0;
      })
    })
  }

  removeContact = (i) => {
    let contactCopy = [...this.state.initialContacts]
    contactCopy.splice(i, 1)
    console.log("clicked", contactCopy)
    this.setState({
      initialContacts: contactCopy
    })
  }


  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <h1>Iron Contacts</h1>
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col">
            <button onClick={this.addContact}>Add Random Contact</button>
          </div>
          <div className="col">
            <button onClick={this.sortByName}>Sort by Name</button>
          </div>
          <div className="col">
            <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
        </div>
        <br></br>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          {this.contactsComponent()}
        </table>
      </div>
    )
  }
}

export default App;
