import { Component } from "react"
import "./App.css"

import contacts from "../contacts.json"
import ContactsTable from "./ContactsTable"
import Button from "./Button"

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5),
    remainingContactsList: contacts.slice(5),
  }

  addRandomContact = () => {
    if (this.state.remainingContactsList.length) {
      const newContactsList = [...this.state.contactsList]
      const newRemainingContactsList = [...this.state.remainingContactsList]

      const randomIndex = Math.floor(
        Math.random() * newRemainingContactsList.length
      )
      const randomContact = newRemainingContactsList.splice(randomIndex, 1)[0]
      newContactsList.push(randomContact)

      this.setState({
        contactsList: newContactsList,
        remainingContactsList: newRemainingContactsList,
      })
    }
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
      <main>
        <h1>Iron Contacts</h1>
        <div className="mt-5">
          <Button className="button" onClick={this.addRandomContact}>
            Add random contact
          </Button>
          <Button className="button" onClick={this.sortByName}>
            Sort by name
          </Button>
          <Button className="button" onClick={this.sortByPopularity}>
            Sort by popularity
          </Button>
        </div>
        <ContactsTable
          className="mt-5 contacts-table is-scrollable"
          contacts={this.state.contactsList}
          removeFunction={this.deleteContact}
        />
      </main>
    )
  }
}

export default App
