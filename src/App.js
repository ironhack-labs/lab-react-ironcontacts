import React, { Component } from 'react'
import './App.css';
import contactsJson from './contacts.json'

class App extends Component {
  state = {
    contacts: contactsJson.filter((contact, index) => index < 5 )
  }

  addRandomContact() {
    const randomContact = contactsJson[Math.floor(Math.random() * (contactsJson.length -1 - 5) + 5)]
    
    this.setState(() => {
      if (!this.state.contacts.includes(randomContact)) {
        return {
          contacts: this.state.contacts.concat(randomContact)
        }
      }
    })
  }

  sortContacts(type) {
    if (type === "name") {
      this.setState({
        contacts: this.state.contacts.sort((a, b) => {
          if(a.name < b.name) { return -1 }
          if(a.name > b.name) { return 1 }
          return 0
        })
      })
    }

    if (type === "popularity") {
      this.setState({
        contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
      })
    }    
  }
  
  deleteContact(id) {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
    
  }

  render() {
    return (
      <div className='App'>
        <h1>IronContacts</h1>
        <div>
          <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
          <button onClick={() => this.sortContacts("name")}>Sort by name</button>
          <button onClick={() => this.sortContacts("popularity")}>Sort by popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return(
                <tr key={contact.id}>
                  <td><img className='picture' src={contact.pictureUrl}/></td>
                  <td>{contact.name}</td>
                  <td>{Math.round(contact.popularity)}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy ? "🏆" : ""}</td>
                  <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
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

      // <tr>
      //   <td><img src=''></img>{contacts.map(user => user.picture)}</td>
      //   <td>{contacts.map(user => user.name)}</td>
      //   <td>{contacts.map(user => user.popularity)}</td>
      // </tr>