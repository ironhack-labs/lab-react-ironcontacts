import React, { Component } from 'react'
import './App.css';
import Contacts from './contacts.json'

export default class App extends Component {
    state = {
      contacts : Contacts.slice(0,5)
    }

    addContact = () => {
      let randomIndex = Math.floor(Math.random()* Contacts.length);
      const newContact = Contacts[randomIndex];
      this.setState((state) => ({
        contacts: [newContact, ...state.contacts]
      }))
    }

    sortName = () => {
      this.setState((state) => ({
        contacts: state.contacts.sort((a,b) => a.name.localeCompare(b.name))
      }))
    }

    sortPopularity = () => {
      this.setState((state) => ({
        contacts: state.contacts.sort((a,b) => b.popularity - a.popularity)
      }))
    }

    deleteContact = (index) => {
      const contactsCopy = this.state.contacts.slice();
      contactsCopy.splice(index, 1)
      this.setState({
        contacts: contactsCopy
      })
    }

  render() {
    return (
      <div className="IronContacts">
          <h1>IronCast Contacts</h1>
          <div className="Buttons">
            <button onClick={this.addContact}>Add random contact</button>
            <button onClick={this.sortName}>Sort alphabetically</button>
            <button onClick={this.sortPopularity}>Sort by popularity</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(contact => {
                return ( 
                  <tr>
                    <td><img src={contact.pictureUrl} alt="celebrity"/></td>
                    <td>{contact.name}</td>
                    <td>{Math.round(contact.popularity *10) / 10}</td>
                    <td><button onClick={() => this.deleteContact(this.state.contacts.indexOf(contact))}>Delete</button></td>
                  </tr>
                ) 
              })}
            </tbody>
          </table>
      </div>
    )
  }
}