import './App.css';
import contacts from "./contacts.json";
import React, { Component } from 'react';

const contactsCopy = contacts.slice(5, contacts.length)

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: contacts.slice(0,5)
    }
  }

  addRandomContact() {
    
    const randomNumber = Math.floor(Math.random() * contactsCopy.length)
    const newArray = this.state.contacts
    newArray.unshift(contactsCopy[randomNumber])

    contactsCopy.splice(randomNumber, 1)

    this.setState({
      contacts: newArray
    })
  }

  sortByName() {
    const copyArray = [...this.state.contacts]
    copyArray.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({
      contacts: copyArray
    })
  }

  sortByPopularity() {
    const copyArray = [...this.state.contacts]
    copyArray.sort((a, b) => b.popularity - a.popularity)

    this.setState({
      contacts: copyArray
    })
  }

  removeContact(id) {
    const newArray = this.state.contacts.filter(contact => contact.id !== id)

    this.setState({
      contacts: newArray
    })
  }



  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button className="btn" onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button className="btn" onClick={() => this.sortByName()}>Sort by name</button>
        <button className="btn" onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        <table >
          <tbody>
            <tr className="header">
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
            {this.state.contacts.map(eachContact => {
              return (
                <tr key={eachContact.id}>
                  <td><img className="img" src={eachContact.pictureUrl} alt={eachContact.name}/></td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                  <td>
                    <button className="btn btn-delete" onClick={() => this.removeContact(eachContact.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default App;
