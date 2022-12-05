import './App.css'
import contactsDB from './contacts.json'
import {useState} from 'react';

function App() {
  const copyOfContactsDb = contactsDB.slice()
  const getFiveContacts = copyOfContactsDb.slice(0,5)
  // console.log(getFiveContacts)
  
  const [contactsList, setContactsList] = useState(getFiveContacts)

  const addRandomContact = () => {
    const randomIndexValue = Math.floor(Math.random() * copyOfContactsDb.length)
    const randomContact = copyOfContactsDb[randomIndexValue]
    setContactsList([randomContact, ...contactsList])
    copyOfContactsDb.splice(randomIndexValue, 1)
  }


  const sortByPopularity = () => {
      let sortedContacts = contactsList.slice().sort(function (a, b) {
        return b.popularity > a.popularity
    })
    setContactsList(sortedContacts)
  }


  const sortByName = () => {
    let sortedContacts = contactsList.slice().sort(function (a, b) {
        return a.name.localeCompare(b.name)
    })
    setContactsList(sortedContacts)
  }


  const deleteContact = (id) => {
    let filteredContacts = contactsList.filter((contact) => {
        return contact.id !== id
    })
    setContactsList(filteredContacts)
  }


  return (
    <>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead className="table">
          <tr className="tableRow">
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Won Oscar</h2></th>
            <th><h2>Won Emmy</h2></th>
            <th><h2>Remove</h2></th>
          </tr>
        </thead>
    	
        <tbody>
        {contactsList.map(contact => (
          <tr key={contact.id} className="tableRow">
            <td><img className="profilePic" src={contact.pictureUrl} alt={contact.name}/></td>
            <td><h3>{contact.name}</h3></td>
            <td><h3>{contact.popularity}</h3></td>
            <td><h3>{contact.wonOscar && "🏆"}</h3></td>
            <td><h3>{contact.wonEmmy && "🏆"}</h3></td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default App;


