import contactData from './contacts.json'
import './App.css';
import React, { useState } from 'react'

function App() {

  const [contacts, setContacts] = useState(contactData.slice(0, 5))
  console.log(contacts)

  const addContact = () => {
    let randomContact = contactData[Math.floor(Math.random() * contactData.length)]
    setContacts(contacts => [randomContact, ...contacts])
  }

  const sortByName = () => {
    let sortedList = contacts.sort((a,b)=> {
      return a.name.localeCompare(b.name)
    })
    setContacts(contacts => [...sortedList])
  }

  const sortByPopularity = () => {
    let sortedByPop = contacts.sort((a,b) => {
      return b.popularity - a.popularity
    })
    setContacts(contacts => [...sortedByPop])
  }

  const deleteContact = (contactId) => {
    let filteredContacts = contacts.filter(contact =>{
     
        return contact.id !== contactId
    })
    setContacts(contacts => [...filteredContacts])
  }



  return (
    <div className="App">

      <h1>IronContacts</h1>

      <button onClick={addContact} className="Add-btn">Add random contact </button>
      <button onClick={sortByName}> Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      <table className="Table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        {contacts.map(contact => {
          return (
            <tbody key={contact.id}>
            <tr > 
              <td>
                <img src={contact.pictureUrl} alt="" width="60px" />
              </td>
              <td>
                {contact.name}
              </td>
              <td>
                {contact.popularity.toFixed(1)}
              </td>
              <td>
                {contact.wonOscar && <p>🏆</p>}
              </td>
              <td>
                {contact.wonEmmy && <p>🏆</p>}
              </td>
              <td>
                <button onClick={() => deleteContact(contact.id)} className="deleteButton">Delete</button>
              </td>
            </tr>
            </tbody>
          )
        }
        )}

      </table>

    </div>
  );
}

export default App;
