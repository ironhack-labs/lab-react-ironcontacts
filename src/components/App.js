import './App.css';
import contacts from '../contacts.json'
import React, { Component } from 'react'

class Contacts extends Component {
  constructor() {
    super()
    this.state = {
      contacts: contacts.slice(0, 6)
    }
  }

  addRandomContact = () => {
    const newContactList = [...this.state.contacts]
    newContactList.unshift(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({
      contacts: newContactList
    })
  }

  sortListByName = () => {
    const sortedContacts = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      contacts: sortedContacts
    })
  }

  sortListByPopularity = () => {
    const sortedContacts = this.state.contacts.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      contacts: sortedContacts
    })
  }

  removeContact = contactIdToRemove => {
    this.setState({
      contacts: this.state.contacts.filter(elm => elm.id !== contactIdToRemove)
    })
  }

  render() {

    return (
      <main>
        <h1 className="title">IronContacts</h1>
        <div className="buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortListByName}>Sort By Name</button>
          <button onClick={this.sortListByPopularity}>Sort By Popularity</button>
        </div>
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((elm, idx) =>
              <tr key={idx}>
                <td><img src={elm.pictureUrl} alt={elm.name} /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity.toFixed(2)}</td>
                <td><button onClick={() => this.removeContact(elm.id)} className="delete-btn">Delete</button></td>
              </tr>)}
          </tbody>
        </table>
      </main>
    )
  }
}

function App() {
  return (

    <Contacts />

  );
}

export default App;
