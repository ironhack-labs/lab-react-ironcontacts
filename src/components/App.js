import React, { Component } from 'react'
import contacts from '../contacts.json'
import './App.css'


// Iteration 1 | Display 5 Contacts
const contactsArray = contacts.slice(0, 5)


class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contactsArray
    }
  }


  // Iteration 2 | Add New Random Contacts
  addRandomContact = () => {
    const contactsAddNewContact = [...this.state.contacts]
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    contactsAddNewContact.push(randomContact)
    this.setState({
      contacts: contactsAddNewContact
    })
  }


  // Iteration 3 | Sort Contacts By Name
  sortContactsByName = () => {
    const contactsByName = [...this.state.contacts]
    contactsByName.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      }
      return contactsByName
    })
    this.setState({
      contacts: contactsByName
    })
  }


  // Iteration 3 | Sort Contacts By Popularity
  sortContactsByPopularity = () => {
    const contactsByPopularity = [...this.state.contacts]
    contactsByPopularity.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1
      } else if (a.popularity < b.popularity) {
        return -1
      }
      return contactsByPopularity
    })
    this.setState({
      contacts: contactsByPopularity
    })
  }


  // Iteration 4 | Remove Contacts
  removeContact = contactToDelete => {
    const contactsAfterRemove = [...this.state.contacts]
    contactsAfterRemove.splice(contactToDelete, 1)
    this.setState({
      contacts: contactsAfterRemove
    })
  }

  
  // Render
  render() {
  
    return (
      <table>
        
        <thead>
          <tr>
            <th className="tableTitle" colSpan="4">IronContacts</th>
          </tr>
          <tr>
            <td><button className="btnRandom" onClick={this.addRandomContact}>Add Random Contact</button></td>
            <td><button className="btnSortByName" onClick={this.sortContactsByName}>Sort by Name</button></td>
            <td><button className="btnSortByPopularity" onClick={this.sortContactsByPopularity}>Sort by Popularity</button></td>
          </tr>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>

          {this.state.contacts.map((elm, idx) => {

            return (
              <tr key={idx}>
                <td><img src={elm.pictureUrl} alt={elm.name}/></td>
                <td>{elm.name}</td>
                <td>{(elm.popularity).toFixed(2)}</td>
                <td><button className="btnDelete" onClick={() => this.removeContact(idx)}>Delete</button></td>
              </tr> 
            )

          })}
          
        </tbody>
        
      </table>
    )
  }
}

export default App
