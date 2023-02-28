import React, { useState } from 'react'
import './App.css';
import contactsDB from './contacts.json';

const contactMinusFive = contactsDB.slice(5)

function App() {
  const [contacts, setContacts] = useState(contactsDB.slice(0, 5))
  const handleAddContact = () => {
    const randomIndex = Math.floor(Math.random() * contactMinusFive.length)

    const randomContact = contactMinusFive.splice(randomIndex, 1)[0]

    setContacts([...contacts, randomContact])
  }

  const sortByPopularity = () => {
    const copy = [...contacts]
    copy.sort((a, b) => b.popularity - a.popularity)
    setContacts(copy)
  }

  const sortByName = () => {
    const copy = [...contacts]
    copy.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(copy)
  }

  const handleDelete = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id)
    setContacts(newContactList)
  }

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button className='btn-top' onClick={handleAddContact}>Add Random Contact</button>
      <button className='btn-top' onClick={sortByPopularity}>Sort by popularity</button>
      <button className='btn-top' onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr className='table-head'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr key={contacts.id} className='contact-info'>
                <td><img src={contacts.pictureUrl} alt={contacts.name} /></td>
                <td className='name'>{contacts.name}</td>
                <td className='popularity'>{(contacts.popularity).toFixed(2)}</td>
                <td>{contacts.wonOscar ? "🏆" : ""}</td>
                <td>{contacts.wonEmmy ? "🏆" : ""}</td>
                <td><button className='btn-delete' onClick={() => handleDelete(contacts.id)}> Delete 🗑️ </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}



export default App;
