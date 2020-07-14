import React from 'react'
import './App.css'
import ContactsList from './components/Contacts/ContactsList'
import ContactsCard from './components/Contacts/ContactsCard'


function App() {
  return (
    <>
      <h1>IronContacts</h1>
      <table className="contact-row">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <ContactsList />
        </tbody>
      </table>
    </>
  )
}

export default App
