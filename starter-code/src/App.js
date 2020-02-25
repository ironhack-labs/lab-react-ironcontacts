import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import Card from './components/card/Card'


class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: contacts.splice(0, 5)
    }
  }

  contactRandom = () => {
    const contactsNew = [...this.state.contacts]
    let randomNumber = Math.floor(Math.random() * (contacts.length + 1))
    contactsNew.push(contacts[randomNumber])
    this.setState({ contacts: contactsNew })
  }

  sortName = () => {
    const contactsNew = [...this.state.contacts]
    contactsNew.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    this.setState({ contacts: contactsNew})
  }

  sortPopularity = () => {
    const contactsNew = [...this.state.contacts]
    contactsNew.sort(function (a, b) {
      return (b.popularity - a.popularity)  
    })
    this.setState({ contacts: contactsNew})
  }
  
  deleteContact = idx => {
    const contactsNew = [...this.state.contacts]
    contactsNew.splice(idx, 1)
    this.setState({ contacts: contactsNew })
}


  render() {
    console.log(this.state.contacts)
    return (
      <>
        <h1>IronContacts</h1>

        <button onClick={this.contactRandom}>Añadir contacto</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>

        <table>
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
        </thead>


        {this.state.contacts.map((contact, id) => {
          console.log(contact)
          return <Card key={id} {...contact} deleteOneContact={() => this.deleteContact(id)} />

         
                

        })}
</table>
      </>

    )
  }
}

export default App;
