import logo from './logo.svg';
import './App.css';
import data from './contacts.json'
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(data.slice(0,5))

  function addRandomContact(contacts) {
    let helperContacts = [...contacts]
    let unusedContacts = []
    data.forEach(contact => {
      if(!contacts.includes(contact)) {
        unusedContacts.push(contact)
      }
    })
    helperContacts.push(unusedContacts[Math.floor(Math.random() * (unusedContacts.length - 1))])
    return helperContacts
  }

  function sortByName(contacts) {
    let helperContacts = [...contacts]
    helperContacts.sort((a, b) => {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    return helperContacts
  }

  function sortByPopularity(contacts) {
    let helperContacts = [...contacts]
    helperContacts.sort((a, b) => {
      return (a.popularity > b.popularity) ? -1 : (a.popularity < b.popularity) ? 1 : 0;
    })
    return helperContacts
  }

  function deleteContact(contactId, contacts) {
    console.log(contactId)
    console.log(contacts)
    let helperContacts = []
    contacts.forEach(contact => {
      if(contact.id != contactId) {
        helperContacts.push(contact)
      }
    })
    return helperContacts
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => setContacts(addRandomContact(contacts))}>Add Random Contact</button>
        <button onClick={() => setContacts(sortByName(contacts))}>Sort by Name</button>
        <button onClick={() => setContacts(sortByPopularity(contacts))}>Sort by Popularity</button>
      </div>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="contact picture" /></td>
              <td>{contact.name}</td>
              <td>{(Math.round(contact.popularity * 100) / 100).toString()}</td>
              <td>{contact.wonOscar && <img className='logo' src="https://seeklogo.com/images/O/Oscar-logo-E91AF1F330-seeklogo.com.png" alt="trophy" />}</td>
              <td>{contact.wonEmmy && <img className='logo' src="https://www.autoscript.tv/wp-content/uploads/2022/11/Emmy-award.png" alt="trophy" />}</td>
              <td><button onClick={()=> setContacts(deleteContact(contact.id, contacts))}>Delete</button></td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;
