import React, { Component } from 'react'
import contacts from '../contacts.json'
import Actors from './contacts/Contacts'
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.contactCopy = [...contacts]
    this.fiveContacts = this.contactCopy.splice(0, 5)
    this.state = {
      firstContacts: this.fiveContacts
    }
  }

  addRandomContact = () => {
    const newActor = this.contactCopy.filter((elm) => !this.fiveContacts.includes(elm))
    const randomActor = newActor[Math.floor(Math.random() * (newActor.length - 1))]
    this.fiveContacts.push(randomActor)
    this.setState({ firstContacts: this.fiveContacts }) 
  }

  sortByName = () => {
    this.fiveContacts.sort(function (a, b) {
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
    this.fiveContacts.sort(function (a, b) {
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

  removeContactFromState = idx => {
    this.fiveContacts.splice(idx, 1)
    this.setState({ firstContacts: this.fiveContacts })
  }

  render() {
    return (
      <>
      <main>
          <h1>IronContacts</h1>
          <div>
            <button onClick={this.addRandomContact}>
                Add Random
            </button>
            <button onClick={this.sortByName}>
                Sort by name
            </button>
            <button onClick={this.sortByPopularity}>
                Sort by popularity
            </button>

          </div>
          
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
                this.state.firstContacts.map((elm, idx) => (<Actors key={idx} {...elm} removeContact={() => this.removeContactFromState(idx)} />))
            }
          </tbody>
        </table>
      </main>
      </>
    )
    }
  }

export default App;
