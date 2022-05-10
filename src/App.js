import contactsArr from './contacts.json';
import './App.css';
import { useState } from 'react'

function App() {
  const fiveContact = contactsArr.splice(0, 5);

  const [contacts, setContact] = useState(fiveContact);

  const otherContacts = contactsArr.slice(6);
  const randomIndex = Math.floor(Math.random() * otherContacts.length)
  const shallowCopyContact = [...contacts]


  const addRandom = () => {
    const addToContacts = shallowCopyContact.concat(otherContacts[randomIndex])
    setContact(addToContacts)
  }


  const sortedByName = () => {
    shallowCopyContact.sort((a, b) => a.name.localeCompare(b.name))
    setContact(shallowCopyContact)
  }


  const sortByPopularity = () => {
    shallowCopyContact.sort((a, b) => b.popularity - a.popularity)
    setContact(shallowCopyContact)
  }


  const deleteContact = (contactId) => {
    const deleteContact = shallowCopyContact.filter(contact => contact.id !== contactId)
    setContact(deleteContact)
  }


  return (
    <div className="App">
      <h2>Iron Contacts</h2>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortedByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table className="table">
        <thead className="table-header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        {contacts.map(contact => {
          return (
            <tbody className="table-content" key={contact.id} >
              <td><img src={contact.pictureUrl} /></td>
              <td><h4>{contact.name}</h4></td>
              <td><h4>{contact.popularity}</h4></td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🏆" : null}</td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </tbody>
          )
        })}

      </table>
    </div>
  );
}

export default App;
