import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showContacts: contacts.slice(0, 5)
    }
  }

  // Random element 
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  // Add Contact
  addRandomContact = () => {
    this.setState({
      showContacts: [
        ...this.state.showContacts,
        contacts[this.getRandomIntInclusive(0, contacts.length - 1)]
      ]
    })
  }

  // Sort by name 

  sortByName = () => {
    this.setState({
      showContacts: this.state.showContacts.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
    })
  }

  // Sort by popularity 

  sortByPopularity = () => {
    this.setState({
      showContacts: this.state.showContacts.sort(function (a, b) {
        return b.popularity - a.popularity
      })
    })
  }

  // Delete Contact 

  deleteContact = (id) => {
    let deleteContact = [...this.state.showContacts]
    deleteContact.splice(id,1)

    this.setState({
      showContacts: deleteContact
    })
  }

 

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        {this.state.showContacts.map((contact, index) => {
          return (
            <ul className='contacts-container' key={index}>
              <div className='contact-info-container'>
                <h2>Picture</h2>
                <li><img src={contact.pictureUrl} alt="actor" /></li>
              </div>
              <div className='contact-info-container'>
                <h2>Name</h2>
                <li>{contact.name}</li>
              </div>
              <div className='contact-info-container'>
                <h2>Popularity</h2>
                <li>{contact.popularity}</li>
              </div>
              <div>
                <li><button onClick={this.deleteContact}>Delete</button></li>
              </div>
            </ul>);
        })}
      </div>
    )
  }
}

export default App;
