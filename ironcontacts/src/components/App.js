import 'bulma/css/bulma.css';
import './App.css';
import contacts from './contacts.json'
import { Component } from 'react'
import Table from './Table'
import Button from './Button'

class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }

  chooseRand(max, min = 0) { return Math.round(Math.random() * (max - min) + min) }

  addContact() {

    const contactCopy = [...this.state.contacts]
    contactCopy.push(contacts[this.chooseRand(53)])

    this.setState({
      contacts: contactCopy
    })
  }

  sortByName() {

    const newAlphOrder = [...this.state.contacts]
    newAlphOrder.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    this.setState({
      contacts: newAlphOrder
    })
  }

  sortByPopularity() {

    const newPopOrder = [...this.state.contacts]
    newPopOrder.sort((a, b) => a.popularity < b.popularity ? 1 : (a.popularity > b.popularity ? - 1 : 0))
    this.setState({
      contacts: newPopOrder
    })
  }

  deleteContact(id) {

    this.setState({
      contacts: this.state.contacts.filter(elm => elm.id !== id)
    })
  }

  render() {

    const fiveContacts = this.state.contacts

    return (
      <main className="main">

        <h1> Iron Contacts</h1>

        <Button name="Add new contact" action={() => this.addContact()} />
        <Button name="Sort by Name" action={() => this.sortByName()} />
        <Button name="Sort by Popularity" action={() => this.sortByPopularity()} />

        <table className="mytable table is-striped">
          <thead>
            <tr>
              <th> Picture</th>
              <th> Name</th>
              <th> Popularity</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {fiveContacts.map((elm, idx) => <Table {...elm} deleteContact={() => this.deleteContact(elm.id)} key={idx} />)}
          </tbody>
        </table>
      </main >
    )
  }
}

export default App;
