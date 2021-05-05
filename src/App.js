import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import React, { Component } from 'react'

class App extends Component {

  state = {
    currentContacts: contacts.slice(0,5)
  }

  addRandomContact = () => { 
    const random = Math.floor(Math.random()*contacts.length)
    const randomContact = contacts[random]

    this.setState((state) =>  ({ 
      currentContacts: [...state.currentContacts, randomContact]
    })) 
  }

  sortAlphabetically = () => { 
    //console.log("hello");
    this.setState((state) => ({
      currentContacts: state.currentContacts.sort( (a,b) => a.name.localeCompare(b.name))
    }))}
  
  sortPopularity = () => { 
    console.log("hello");
    this.setState((state) => ({
    currentContacts: state.currentContacts.sort( (a,b) => b.popularity - a.popularity)
  }))}

  removeContact = (id) => {
      this.setState((state) => ({
        contacts: state.contacts.filter(contact => { contact.id !== id })
      }));
  }

  

  render () {
    //console.log(this.state.currentContacts);

    const mappedContacts = this.state.currentContacts.map( contact => (
      <tr key={contact.id}>
        <td><img src={contact.pictureUrl} height="100px"/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={() => this.removeContact(contact.id)}>Remove contact</button></td>
      </tr>
     ))

    return (
      <>
        <button onClick={this.addRandomContact}>Add new contact</button>
        <button onClick={this.sortAlphabetically}>Sort alphabetically</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
              <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
              </tr>
          </thead>
          <tbody>
            {mappedContacts}
          </tbody>
        </table>
      </>
    )
  }
}

export default App;

 