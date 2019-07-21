import React, { useState } from 'react'
import contactsData from './contacts.json'
import CelebSlot from './components/CelebSlot.js'

export default function App() {
  const [contacts, setContacts] = useState([])
  const [firstDisplay, setFirstDisplay] = useState(false)

  function load10() {
    for (let i = 0; i < 5; i++) setContacts(prevState => [...prevState, contactsData[i]])
    setFirstDisplay(prevState => !prevState)
  }
  function loadRandCeleb() {
    let celebIndex = Math.floor(Math.random() * contactsData.length + 5)
    setContacts(prevState => [...prevState, contactsData[celebIndex]])
  }
  function sortByName() {
    console.log(contacts)
    setContacts(prevState =>
      [...prevState].sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    )
  }
  function sortByPopularity() {
    console.log(contacts)
    setContacts(prevState =>
      [...prevState].sort((a, b) => {
        if (a.popularity < b.popularity) {
          return -1
        }
        if (a.popularity > b.popularity) {
          return 1
        }
        return 0
      })
    )
  }

  function delCeleb(index) {
    let newContacts = []
    setContacts(prevState => {
      newContacts = [...prevState]
      newContacts.splice(index, 1)
      return newContacts
    })
    return
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>IronContacts</h1>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <div
        style={{
          display: 'flex',
          width: '30vw',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}
      >
        <p>Pic</p>
        <p>name</p>
        <p>Popularity</p>
      </div>
      {console.log(contacts)}
      {firstDisplay ? (
        contacts.map((contact, i) => (
          <div key={i}>
            <CelebSlot index={i} contact={contact} delCeleb={delCeleb} />
          </div>
        ))
      ) : (
        <button onClick={load10}>Load first 10</button>
      )}
      <button onClick={loadRandCeleb}>Add a celeb</button>
    </div>
  )
}
