import './App.css';
import {useState} from 'react'
import contactsData from './contacts.json'

function App() {
  
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
  
  const addRandomContact = () => {
    const filteredContacts = contactsData.filter(contact => !contacts.includes(contact))
    const randomNumber = Math.floor(Math.random()*filteredContacts.length)
    
    setContacts([...contacts, filteredContacts[randomNumber]])
  }
  
  const sortByName = () => {
    const sortedByName = [...contacts].sort((a, b) => {
      if(a.name < b.name) return -1;
      else if(a.name > b.name) return 1;
      else return 0;
    })

    setContacts(sortedByName)
  }

  const sortByPopularity = () => {
    const sortedByPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContacts(sortedByPopularity)
  }

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId
    })
    setContacts(filteredContacts)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar? <p>🏆</p>:<p>✖️</p>}</td>
                <td>{contact.wonEmmy? <p>🏆</p>:<p>✖️</p>}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
