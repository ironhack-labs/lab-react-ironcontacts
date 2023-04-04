import logo from './logo.svg';
import './App.css';
import ContactsFromJson from './contacts.json'
import { useState } from 'react';

function Contacts() {
  const [allContacts] = useState(ContactsFromJson);
  const [displayedContacts, setDisplayedContacts] = useState(allContacts.slice(0, 5));

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedContacts(sortedContacts);
  };
  
  const sortByPopularity = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => b.popularity - a.popularity);
    setDisplayedContacts(sortedContacts);
  };


  const addRandomContact = () => {
    const remainingContacts = allContacts.filter((contact) => !displayedContacts.includes(contact));
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    const updatedContacts = [...displayedContacts, randomContact];
    setDisplayedContacts(updatedContacts);
  };

  const deleteContacts = (Id) => {
    const updatedContacts = displayedContacts.filter( contacts => contacts.id !== Id );
    setDisplayedContacts(updatedContacts);
  }

  return (
    <div key={allContacts.id}>
      <h1>IronContacts </h1>
      <button class="randomBtn" onClick={addRandomContact}>Add Random Contact</button>
      <button class="sortNameBtn" onClick={sortByName}>Sort by Name</button>
      <button class="sortPopBtn" onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr class="table">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th class="oscar">Won Oscar</th>
            <th>Won Emmy</th>
            <th class="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact) => (
            <tr class="content" key={contact.id}>
              <td>
                <img class="image" src={contact.pictureUrl} width="160" height="240" alt="https://via.placeholder.com/600x400" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td><button class="deleteBtn" onClick={ () => {deleteContacts(contact.id)} }>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function App() {
  return (
    <div className="App">
    <Contacts />
    </div>
  );
}

export default App;
