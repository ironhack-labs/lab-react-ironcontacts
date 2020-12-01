import React, { Component } from 'react'
import contacts from './contacts.json';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      listFiveContacts: contacts.slice(0, 5)
    }
  }

  displayContacts = () => {

    return this.state.listFiveContacts.map((contact, index) => {

      return (
        <tr key={index}>
          <td><img className="avatar" src={contact.pictureUrl} alt={contact.name} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button className="btn btn-danger" onClick={() => this.removeContact(index)}>Delete</button></td>
        </tr >
      )

    })
  }

  selectRandomContact = () => {

    const randomIndexContact = Math.floor(Math.random() * contacts.length)

    return contacts[randomIndexContact]

  }

  addRandomContact = () => {

    const listFiveContactsCopy = this.state.listFiveContacts
    listFiveContactsCopy.push(this.selectRandomContact())

    this.setState({
      listFiveContacts: listFiveContactsCopy
    })

  }

  sortByName = () => {

    const listFiveContactsCopy = this.state.listFiveContacts
    listFiveContactsCopy.sort((a, b) => (a.name > b.name) ? 1 : -1)

    this.setState({
      listFiveContacts: listFiveContactsCopy
    })

  }

  sortByPopularity = () => {

    const listFiveContactsCopy = this.state.listFiveContacts
    listFiveContactsCopy.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)

    this.setState({
      listFiveContacts: listFiveContactsCopy
    })

  }

  removeContact = contactIndexToDelete => {

    const listFiveContactsCopy = this.state.listFiveContacts
    listFiveContactsCopy.splice(contactIndexToDelete, 1)

    this.setState({
      listFiveContacts: listFiveContactsCopy
    })

  }

  render() {

    return (

      <section className="container mt-5">
        <h1>IronContacts</h1>
        <button className="btn btn-success mx-2 mb-5 mt-5" onClick={this.addRandomContact}>Add Random Contact</button>
        <button className="btn btn-info mx-2 mb-5 mt-5" onClick={this.sortByName}>Sort by Name</button>
        <button className="btn btn-warning mx-2 mb-5 mt-5" onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.displayContacts()}
          </tbody>
        </table>
      </section>

    )

  }

}

export default App;
