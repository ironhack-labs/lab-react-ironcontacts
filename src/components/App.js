import { Component } from "react"
import "./App.css"

import contacts from "../contacts.json"
import ContactsTable from "./ContactsTable"
import Button from "./Button"

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5),
  }

  addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[randomIndex]
    const newContactsList = [...this.state.contactsList]
    newContactsList.push(randomContact)
    this.setState({
      contactsList: newContactsList,
    })
  }

  sortByName = () => {
    const newContactsList = [...this.state.contactsList]
    newContactsList.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      contactsList: newContactsList,
    })
  }

  sortByPopularity = () => {
    const newContactsList = [...this.state.contactsList]
    newContactsList.sort(function (a, b) {
      return b.popularity - a.popularity
    })
    this.setState({
      contactsList: newContactsList,
    })
  }

  deleteContact = id => {
    this.setState({
      contactsList: this.state.contactsList.filter(
        contact => contact.id !== id
      ),
    })
  }

  render() {
    return (
      <>
        <h1>Iron Contacts</h1>
        <Button onClick={this.addRandomContact}>Add random contact</Button>
        <Button onClick={this.sortByName}>Sort by name</Button>
        <Button onClick={this.sortByPopularity}>Sort by popularity</Button>
        <ContactsTable
          className="contacts-table"
          contacts={this.state.contactsList}
          removeFunction={this.deleteContact}
        />
      </>
    )
  }
}

export default App
