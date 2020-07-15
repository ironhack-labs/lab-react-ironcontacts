import React, { useState, useEffect } from 'react';
import Contacts from './components/Contacts'
import Button from './components/Button'

import contactsData from './contacts.json'
import './App.css';

function App() {
  const [contacts, setContacts] = useState([])
  const [showContacts, setShowContacts] = useState([])

  useEffect(() => {
    const [one, two, tree, four, five] = contactsData
    setContacts([one, two, tree, four, five])
    setShowContacts([one, two, tree, four, five])
  }, [])

  useEffect(() => {
    setShowContacts(contacts)
  }, [contacts])

  const addRandomContact = () => {
    const index = Math.floor(Math.random() * (contactsData.length - 5)) + 5
    if (showContacts.length === contactsData.length) {
      return
    }
    if (!contacts.includes(contactsData[index])) {
      return setContacts([contactsData[index], ...contacts])
    }
    addRandomContact()
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const sortByName = () => {
    const sortedContacts = contacts.sort((contactA, contactB) => contactA.name.toUpperCase() - contactB.name.toUpperCase()).map(contact => contact)
    setContacts(sortedContacts)
  }
  const sortByPopularity = () => {
    const sortedContacts = contacts.sort((contactA, contactB) => contactB.popularity - contactA.popularity).map(contact => contact)
    setContacts(sortedContacts)
  }


  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <Button text='Add Random Contact' handlerClickEvent={addRandomContact} />
      <Button text='Sort By Name' handlerClickEvent={sortByName} />
      <Button text='Sort By Popularity' handlerClickEvent={sortByPopularity} />
      <Contacts contacts={showContacts} handleClick={deleteContact} />
    </div>
  );
}

export default App;
