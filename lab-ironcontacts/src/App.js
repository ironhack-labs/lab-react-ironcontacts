import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactCard from './contactCard/contactCard'

class App extends Component {

  constructor() {

    super()

    this.contactCopy = [...contacts]

    this.fiveContacts = this.contactCopy.splice(0, 5)
    this.state = { firstContacts: this.fiveContacts }
  }


  addRandomContact = () => {
    const newActor = this.contactCopy.filter((elm) => !this.fiveContacts.includes(elm))
    const randomActor = newActor[Math.floor(Math.random() * (newActor.length - 1))]
    this.fiveContacts.push(randomActor)
    this.setState({ firstContacts: this.fiveContacts }) 
  }

  sortByName = () => {
    this.fiveContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({ firstContacts: this.fiveContacts })
  }

  sortByPopularity = () => {
    this.fiveContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({ firstContacts: this.fiveContacts })
  }

  removeContact = idx => {
    this.fiveContacts.splice(idx, 1)
    this.setState({ firstContacts: this.fiveContacts })
  }

  render() {
    return (
      <>
      <button onClick={this.addRandomContact}>Add Random</button>
      <button onClick={this.sortByName}>sort by name</button>
      <button onClick={this.sortByPopularity}>sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.firstContacts.map((elm, idx) => (<ContactCard key={idx} {...elm} removeContact={() => this.removeContact(idx)} />))}
          </tbody>
        </table>

      </>

    )
  }
}
export default App;