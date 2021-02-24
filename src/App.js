import './App.css';
import contacts from "./contacts.json";

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    contactsArr : contacts.slice(0,5)
  }

  addContact = () => {
    const uniqueContacts = contacts.filter(contact => {
      return !this.state.contactsArr.includes(contact)
    })
    if(uniqueContacts.length > 0) {
      const randomContact = uniqueContacts[Math.floor(Math.random()*uniqueContacts.length)]
      this.setState({
        contactsArr : [...this.state.contactsArr, randomContact]
      })
    }
  }

  filterNameContact = () => {
    this.setState({
      contactsArr : [...this.state.contactsArr].sort((a,b) =>(a.name > b.name)?1:((b.name>a.name)?-1:0))
    })
  }

  filterPopContact = () => {
    this.setState({
      contactsArr : [...this.state.contactsArr].sort((a,b) =>(b.popularity > a.popularity)?1:((a.popularity>b.popularity)?-1:0))
    })
  }

  delete = (id) => {
    const actorsCopy = [...this.state.contactsArr];
    const actorIndex = actorsCopy.findIndex(item => item.id === id);
    actorsCopy.splice(actorIndex,1);
    this.setState({
      contactsArr: actorsCopy
    })
  }

  render() {
    return (
      <div className="App">
      <h1 id="title">IronContacts</h1>
      <div>
        <button className="addButton" onClick={this.addContact}>Add Random Contact</button>
        <button className="addButton" onClick={this.filterNameContact}>Sort By Name</button>
        <button className="addButton" onClick={this.filterPopContact}>Sort By Popularity</button>
      </div>
      <table>
      <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {this.state.contactsArr.map(item => (
            <tr key={item.id}>
              <td><img id="picture" src={item.pictureUrl} alt="director"/></td>
              <td><p>{item.name}</p></td>
              <td><p>{item.popularity}</p></td>
              <td><button className="addButton" onClick={this.delete.bind(this, item.id)}>Delete</button></td>
            </tr>
            ))}
      </tbody>
      </table>
    </div>
    )
  }
}

