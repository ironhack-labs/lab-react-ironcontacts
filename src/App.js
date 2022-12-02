import logo from './logo.svg';
import './App.css'
import contacts from './contacts.json'
import DbSearch from './dbSearch'
import { useState } from 'react';

function App() {
  const copyContactsDb = contacts.slice()
  const getFiveContacts = copyContactsDb.slice(0,5)
  // console.log(getFiveContacts)
  
  const [contactsList, setContactsList] = useState(getFiveContacts)
  const [query, setQuery] = useState("")
  const filteredContactsList = props.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(props.queryProp.toLowerCase())
  })

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * copyContactsDb.length)
    const randomContact = copyContactsDb[randomIndex]
    setContactsList([randomContact, ...contacts])
    copyContactsDb.splice(randomIndex, 1)
  }


  const sortByPopularity = () => {
      let sortedContacts = contacts.slice().sort(function (a, b) {
        return b.popularity > a.popularity
    })
    setContactsList(sortedContacts)
  }


  const sortByName = () => {
    let sortedContacts = contacts.slice().sort(function (a, b) {
        return a.name.localeCompare(b.name)
    })
    setContactsList(sortedContacts)
  }


  const deleteContact = (id) => {
    let filteredContacts = contacts.filter((contact) => {
        return contact.id !== id
    })
    setContactsList(filteredContacts)
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>

      <DbSearch setQueryProp={setQuery}/>

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
      {filteredContactsList.map(contact => (
          <tr key={contact.id} className="tableRow">
            <td><img className="profilePic" src={contact.pictureUrl} alt={contact.name}/></td>
            <td><h3>{contact.name}</h3></td>
            <td><h3>{contact.popularity}</h3></td>
            <td><h3>{contact.wonOscar && "🏆"}</h3></td>
            <td><h3>{contact.wonEmmy && "🏆"}</h3></td>
            <td><button onClick={() => {props.deleteContactProp(contact.id)}}>Delete</button></td>
          </tr>
        ))
      }
      </tbody>
      </table>

      
      </div>
  );
}

export default App;
