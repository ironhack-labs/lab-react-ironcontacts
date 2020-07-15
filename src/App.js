import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }

  addContact = () => {
    let addContact = [...this.state.contacts]
    addContact.push(contacts[Math.floor(Math.random() * (contacts.length))])
    this.setState((state, props) => ({
      contacts: addContact
    }))
  }

  sortName = () => {
    let sortName = [...this.state.contacts]
    sortName.sort(((a, b) => a.name.localeCompare(b.name)))
    this.setState((state, props) => ({
      contacts: sortName
    }))
  }

  sortPopularity = () => {
    let sortPopular = [...this.state.contacts]
    sortPopular.sort((a, b) => b.popularity - a.popularity)
    this.setState((state, props) => ({
      contacts: sortPopular
    }))
  }

  deleteContact = (id) => {
    let deletePerson = [...this.state.contacts].filter((person) => person.id !== id)
    this.setState((state, props) => ({
      contacts: deletePerson
    }))
  }

  render() {
    return (
      <div className="App">

        <h1>Iron Contacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map(e =>
              <tr key={e.id}>
                <th><img src={e.pictureUrl} alt='Face' /></th>
                <th>{e.name}</th>
                <th>{e.popularity}</th>
                <th><button onClick={() => this.deleteContact(e.id)}>Delete</button></th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

}

export default App;
