import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import contacts from './contacts.json'
import DisplayContacts from './components/contacts'
import styled from 'styled-components'

const contactsArr = [...contacts.slice(0, 5)]

function App() {
  const [contact, setContact] = useState(contactsArr)

  const addContact = async () => {
    const filteredContacts = contacts.filter((el) => !contact.includes(el))

    const newContact = await filteredContacts[
      Math.floor(Math.random() * filteredContacts.length)
    ]

    setContact((prevContact) => [...prevContact, newContact])
  }

  const sortByPopularity = () => {
    function compare(a, b) {
      if (a.popularity < b.popularity) {
        return -1
      }
      if (a.popularity > b.popularity) {
        return 1
      }
      return 0
    }

    setContact((prevContact) => [...prevContact.sort(compare).reverse()])
  }

  const sortByName = () => {
    function compare(a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    }

    setContact((prevContact) => [...prevContact.sort(compare)])
  }

  const removeContact = (id) => {
    setContact((prevContact) =>
      prevContact.map((eachContact, index) =>
        eachContact.id === id ? prevContact.splice(index, 1) : eachContact
      )
    )
  }

  return (
    <div style={{ width: '80%' }}>
      <h1 style={{ fontSize: '5rem', textAlign: 'center' }}>IronContacts</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            display: 'inline-block',
            padding: '0.5rem',
          }}
          onClick={addContact}
        >
          {' '}
          Add new Contact
        </button>
        <button
          style={{
            display: 'inline-block',
            padding: '0.5rem',
          }}
          onClick={sortByName}
        >
          {' '}
          Sort by Name
        </button>
        <button
          style={{
            display: 'inline-block',
            padding: '0.5rem',
          }}
          onClick={sortByPopularity}
        >
          {' '}
          Sort by Popularity
        </button>
      </div>
      <TableCon>
        <TableStyling>
          <thead>
            <tr>
              <TableHeader>PictureUrl</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Popularity</TableHeader>
            </tr>
          </thead>
          {contact.map((oneContact) => (
            <DisplayContacts
              key={oneContact.id}
              contact={oneContact}
              remove={removeContact}
            />
          ))}
        </TableStyling>
      </TableCon>
    </div>
  )
}

const TableHeader = styled.th`
  text-align: left;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`
const TableStyling = styled.table`
  width: 100%;
`

const TableCon = styled.div`
  width: 60%;
  margin: 0 auto;
`

export default App
