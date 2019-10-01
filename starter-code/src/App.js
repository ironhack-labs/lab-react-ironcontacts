import React, { Component } from "react";
import { contacts } from './contacts'
import './App.css';
import ContactList from './components/ContactList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      contacts: contacts.slice(0,5)
    };
    }


    randomContacts = () => {
      let newState = {
        ...this.state
      }
      let num = parseInt(Math.random() * contacts.length)
      newState.contacts.push(contacts[num])
      this.setState(newState)
    }

    sortbyName = () => {
      let newState = {
        ...this.state
      }
      let sortbyName = newState.contacts.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
      })
      this.setState(sortbyName)
    }

    sortbyPopularity = () => {
      let newState = {
        ...this.state
      }
  
      let sortbyName = newState.contacts.sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1
        }
      })
      this.setState(sortbyName)
    }

    deleteThis(contacts) {
      let Contacts = [...this.state.contacts]
      let index=Contacts.indexOf(contacts)
      Contacts.splice(index,1)
  
      this.setState({
        ...this.state,
        contacts: Contacts
      });
    }
  


  render() {
    return (
      <div className="container">
        <h1>IronContacts</h1>
        <nav>
        <button onClick={() => this.randomContacts()}>Add Random Contact</button>
        <button onClick={() => this.sortbyName()}>Sort by name</button>
        <button onClick={() => this.sortbyPopularity()}>Sort by popularity</button>
        </nav>
        <div className ='texto'>
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
        <h2>Action</h2>
        </div>

{      this.state.contacts
        .map((contacts, idx) => (
          <ContactList
          key={idx}
          {...contacts} 
          delete={() => this.deleteThis(contacts)}
          />

    ))}
      </div>
    ) 
  }
}

export default App;
