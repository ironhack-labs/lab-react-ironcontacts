import './App.css';
import contactsData from './contacts.json';
import { useState } from 'react';

function getRandomNumber(lowBound, highBound) {
  const rand = Math.floor(Math.random() * (highBound - lowBound) + lowBound);
  return (rand);
}

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    let random;
    do {
      random = contactsData[getRandomNumber(0, contactsData.length)];
    } while(contacts.indexOf(random) !== -1)
    setContacts([... contacts, random]);
  };

  const sortContacts = sortingFct => {
    const sortedContacts = [... contacts].sort(sortingFct);
    setContacts(sortedContacts);
  };

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => { return (contact.id !== contactId); });
    setContacts(filteredContacts);
  };
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={() => sortContacts((a, b) => a.popularity < b.popularity ? 1: -1)}>
        Sort by popularity
      </button>
      <button onClick={() => sortContacts((a, b) => a.name > b.name ? 1: -1)}>
        Sort by name
      </button>

      <table className="contactsTable">
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
          {contacts.map(contact =>{
            return (
              <tr key={contact.id}>
                <td><img alt="contact picture" src={contact.pictureUrl}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {contact.wonOscar === true ? <td>&#127942;</td> : <td></td>}
                {contact.wonEmmy === true ? <td>&#127942;</td> : <td></td>}
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;