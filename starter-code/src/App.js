import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css'
import Cards from './components/cards'

class App extends Component {

  constructor() {
    super()


    this.state = {
      // Para hacer el slice, al objeto se le da una propiedad a la que se hace el slice.
      contacts: contacts.slice(0, 5),
      fullContacts: contacts,
    }

  }

  addContact = () => {
    //elegir un contacto al azar
    const random = Math.floor(Math.random() * (contacts.length - 5)) + 5

    //push a contacts
    const contactsCopy = [...this.state.contacts]

    //actualizar el estado con el nuevo contacs
    contactsCopy.push(contacts[random])
    this.setState({ contacts: contactsCopy })

  }

  sortByName = () => {
    const contactsCopy = [...this.state.contacts]

    contactsCopy.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })


    this.setState({ contacts: contactsCopy })
  }

  sortByPopularity = () => {
    const contactsCopy = [...this.state.contacts]

    contactsCopy.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      } if (a.popularity > b.popularity) {
        return -1;
      }
      return 0
    })

    this.setState({ contacts: contactsCopy })
  }

  deleteOneContact = (idx) => {
    const contactsCopy = [...this.state.contacts]

    contactsCopy.splice(idx, 1)
    this.setState({ contacts: contactsCopy })
  }


  render() {
    console.log(contacts)
    return (
      <main>
        <h1>IronContacts</h1>
        <button onClick={() => { this.addContact() }}> Add random contacto </button>
        <button onClick={() => { this.sortByName() }}> Sort by name </button>
        <button onClick={() => { this.sortByPopularity() }}> Sort by Popularity </button>

        <table>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Action</td>
          </tr>
          {this.state.contacts.map((elm, idx) => <Cards key={idx} {...elm} deleteContact={() => this.deleteOneContact(idx)} />)}

        </table>
      </main >)
  }

}

export default App;
