import './App.css';
import contactsData from "./contacts.json";
import {useState} from 'react'

function App() {
  const first5 = contactsData.slice(0, 5)
  const [contacts, setContacts] = useState(first5)

  const randomContacts = () => {
    const randomChoose = Math.floor(Math.random() * contactsData.length)
    const randomContact = contactsData[randomChoose]
    let newContactsArr = [...contacts]
    if (!newContactsArr.includes(randomContact)) {
      newContactsArr.push(randomContact)
    }
    setContacts(newContactsArr)
  }

  const sortByName = () => {
    let newContactsArr = [...contacts]
    const orderedNames = newContactsArr.sort((a, b) => {
      if (a.name > b.name) return 1 
      return -1
    })
    setContacts(orderedNames)
  }

  const sortByPopularity = () => {
    let newContactsArr = [...contacts]
    const orderedPopularity = newContactsArr.sort((a , b) => {
      if (a.popularity < b.popularity) return 1
      return -1
    })
    setContacts(orderedPopularity)
  }

  const deleteContact = contactId => {
    const filteredContact = contacts.filter(contact => {
      return contact.id !== contactId
    })
    setContacts(filteredContact)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className='add-random-btn' onClick={randomContacts}>Add Random Contact</button>
      <button className="sort-name-btn" onClick={sortByName}>Sort by Name</button>
      <button className="sort-popularity-btn" onClick={sortByPopularity}>Sort by Popularity</button>

      <table className='table'>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won<br></br>Oscar</th>
            <th>Won<br></br>Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {contacts.map (contact => {
          return (
            <tbody>
              <tr>
                <td><img className='image' src={contact.pictureUrl} alt="Contact" /></td>
                <td className='name'>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar === true ? '🏆' : ''}</td>
                <td>{contact.wonEmmy === true ? '👑' : ''}</td>
                <td><button className='delete-contact' onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            </tbody>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
