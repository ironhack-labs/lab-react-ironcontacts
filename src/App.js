import React, { Component } from 'react'
import './App.css';
import contacts from './contacts.json';

const contactsData = contacts.slice(0, 5);

export default class App extends Component {
  state = {
    contacts: contactsData
  }

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state, props) => ({
      contacts: state.contacts.concat(randomContact)
    }))
  }

  sortByName = () => {
    const sortedContacts = [...this.state.contacts]
    sortedContacts.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState((state, props) => ({
      contacts: sortedContacts
    }))
  }

  sortByPopularity = () => {
    const sortedContacts = [...this.state.contacts]
    sortedContacts.sort((a, b) => b.popularity - a.popularity)
    this.setState((state, props) => ({
      contacts: sortedContacts
    }))
  }

  deleteContact = (id) => {
    let remainingContacts = [...this.state.contacts]
    remainingContacts = remainingContacts.filter(contact => {
      return contact.id !== id
    })
    this.setState((state, props) => ({
      contacts: remainingContacts
    }))
  }


  render() {
    const tableRow = this.state.contacts.map(contact => {
      return (
        <tr key={contact.id}>
            <td><img className="contactImg" src={contact.pictureUrl} alt={contact.name}/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
        </tr>
      )
    })
    return (
      <>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {tableRow}
          </tbody>
        </table>
      </>
    )
  }
}