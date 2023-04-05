import './App.css';
import { useState } from 'react';
import contactsArr from './contacts.json';

function App() {

  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));
  const notAddedContacts = contactsArr.slice(5);

  function addRandom() {
    const randomIndexGenerated = Math.floor(Math.random() * notAddedContacts.length);
    const randomContact = notAddedContacts[randomIndexGenerated];
    setContacts(prevContacts => [...prevContacts, randomContact]);
  }

  function sortName() {
    const contactsCopySortName = [...contacts];
    contactsCopySortName.sort((name1, name2) => name1.name.localeCompare(name2.name));
    setContacts(contactsCopySortName);
  }

  function sortPopularity() {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  }

  const deleteContact = (contactId) => {
    const newList = contacts.filter( contactDetails => contactDetails.id !== contactId );
    setContacts(newList);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <span>
        <button onClick={addRandom}>Add a Random Celeb</button>
        <button onClick={sortPopularity} className='not-first-button'>Sort by Popularity</button>
        <button onClick={sortName} className='not-first-button'>Sort by Name</button>
      </span>
      <h2>Current celebs in our database:</h2>
      <h3>{contacts.length}</h3>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return(
              <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt=''/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar === true ? '🏆' : ''}</td>
              <td>{contact.wonEmmy === true ? '🏆' : ''}</td>
              <td>
                <button onClick={ () => {deleteContact(contact.id)} }>❌🗑️❌</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
