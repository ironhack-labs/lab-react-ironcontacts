import { useState } from "react"
import "./App.css"

import contacts from "../contacts.json"
import ContactsTable from "./ContactsTable"
import Button from "./Button"

const App = () => {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5))
  const [remainingContactsList, setRemainingContactsList] = useState(
    contacts.slice(5)
  )

  const addRandomContact = () => {
    if (remainingContactsList.length) {
      const newContactsList = [...contactsList]
      const newRemainingContactsList = [...remainingContactsList]

      const randomIndex = Math.floor(
        Math.random() * newRemainingContactsList.length
      )
      const randomContact = newRemainingContactsList.splice(randomIndex, 1)[0]
      newContactsList.push(randomContact)

      setContactsList(newContactsList)
      setRemainingContactsList(newRemainingContactsList)
    }
  }

  const sortByName = () => {
    const newContactsList = [...contactsList]
    newContactsList.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    setContactsList(newContactsList)
  }

  const sortByPopularity = () => {
    const newContactsList = [...contactsList]
    newContactsList.sort(function (a, b) {
      return b.popularity - a.popularity
    })
    setContactsList(newContactsList)
  }

  const deleteContact = id => {
    const deletedContact = contactsList.find(contact => contact.id === id)
    const newRemainingContactsList = [...remainingContactsList, deletedContact]

    setRemainingContactsList(newRemainingContactsList)
    setContactsList(contactsList.filter(contact => contact.id !== id))
  }

  return (
    <main>
      <h1>Iron Contacts</h1>
      <div className="mt-5">
        <Button className="button" onClick={addRandomContact}>
          Add random contact
        </Button>
        <Button className="button" onClick={sortByName}>
          Sort by name
        </Button>
        <Button className="button" onClick={sortByPopularity}>
          Sort by popularity
        </Button>
      </div>
      <ContactsTable
        className="mt-5 contacts-table is-scrollable"
        contacts={contactsList}
        removeFunction={deleteContact}
      />
    </main>
  )
}

export default App
