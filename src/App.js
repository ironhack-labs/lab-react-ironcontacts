import { useState } from 'react';
import './App.css';
import ContactsDataJSON from './contacts.json'

function App() {
  const [ contacts, setContacts] = useState(ContactsDataJSON.slice(0, 5))

  function addContact() {
    const randomContact = ContactsDataJSON.slice(6)[Math.floor(Math.random() * ContactsDataJSON.length)];

    setContacts([...contacts, randomContact])
  }

  function sortbyPopularity() {
    const copy = [ ...contacts]
    const sortedContactsByPopularity = copy.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      } 
      return -1
    })

    setContacts(sortedContactsByPopularity)
  }

  function sortbyName() {
    const copy = [ ...contacts]
    const sortedContactsByName = copy.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } 
      return 1
    })

    setContacts(sortedContactsByName)
  }

  function deleteContact(name) {
    const filteredContacts = contacts.filter(contact => {
        return contact.name !== name
    })
    
    setContacts(filteredContacts)
}

  return (
    <div className="App">
    <div className='AppTitle'><h1>Ironcontacts</h1></div>
      <div className='BelowHeader'>
        <button onClick={addContact} className='Button'>Add Random Contact</button>
        <button onClick={sortbyPopularity} className='Button'>Sort by Popularity</button>
        <button onClick={sortbyName} className='Button'>Sort by Name</button>
        <br />
        <br />
        <div className='TableFrame'>
          <table className='Table'>
            <thead>
              <tr>
                <th className='Title'>Picture</th>
                <th className='Title'>Name</th>
                <th className='Title'>Popularity</th>
                <th className='Title'>Won Oscar</th>
                <th className='Title'>Won Emmy</th>
                <th className='Title'>Actions</th>
              </tr>
            </thead>
            <tbody>
            {contacts.map(contact => {
              return (
                  <tr>
                    <td><img src={contact.pictureUrl} alt="" className="listImage" /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>{contact.wonOscar ? <p>🏆</p> : <p></p> }</td>
                    <td>{contact.wonEmmy ? <p>🏆</p> : <p></p> }</td>
                    <td><button className='Button' onClick={() => deleteContact(contact.name)}>Delete</button></td>
                  </tr>
              )
            })}
            </tbody>
            </table>
          </div>
          <br /><br />
        </div>
    </div>
  )
}

export default App;