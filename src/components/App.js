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

  render() {
    return (
      <>
        <ContactsTable
          className="contacts-table"
          contacts={this.state.contactsList}
        />
        <Button onClick={this.addRandomContact}>Add random contact</Button>
      </>
    )
  }
}

export default App
