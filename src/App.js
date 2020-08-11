import React, { useState, useEffect } from 'react';
import Contacts from './components/Contacts'
import Button from './components/Button'
import FilterBar from './components/FilterBar'

//importamos JSON 
import contactsData from "./contacts.json";
import './App.css';
function App() {
  //set state 
  const [contacts, setContacts] = useState([])
  const [showContacts, setShowContacts] = useState([])

  useEffect(() => {
    const [one, two, three, four, five] = contactsData;
    setContacts([one, two, three, four, five])
  }, []);

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
    const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name)).map(contact => contact)
    setShowContacts(sortedContacts)
  }

  const sortByPopularity = () => {
    const sortedContacts = contacts.sort((contactA, contactB) => contactB.popularity - contactA.popularity).map(contact => contact)
    setShowContacts(sortedContacts)
  }

  const findContactByName = (event) => {
    event.preventDefault()
    const result = contacts.filter(contact => contact.name.toLowerCase().includes(event.target.value.toLowerCase()))
    if (result) {
      return setShowContacts(result)
    }
  }
 return (
   <div className="App">
      <h1>Ironhack Contacts</h1>
     <FilterBar handleOnChange={findContactByName}>
       <br></br>
       <br></br>
        <Button text='Add Random Contact' handlerClickEvent={addRandomContact} />
        <Button text='Sort By Name' handlerClickEvent={sortByName} />
        <Button text='Sort By Popularity' handlerClickEvent={sortByPopularity} />
      </FilterBar>
      <Contacts contacts={showContacts} handleClick={deleteContact} />
    </div>
  );
}

export default App;