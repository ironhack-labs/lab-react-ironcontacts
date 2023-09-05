import './App.css';
import contactsData from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  function randomContact() {
    const randomIndex = Math.floor(Math.random() * contactsData.length);
    const randomCelebrity = contactsData[randomIndex];

    // creating a new array of random celebrities using the spread operator
    const newContacts = [...contacts, randomCelebrity];

    setContacts(newContacts);
  }

  function sortContactPopularity() {
    const sortPopularity = [...contacts].sort(function (a, b) {
      return b.popularity - a.popularity;
    });

    setContacts(sortPopularity);
  }

  function sortContactName() {
    const sortName = [...contacts].sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setContacts(sortName);
  }

  function deleteName(id) {
    const newList = contacts.filter((contact) => contact.id !== id);
    setContacts(newList);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="app-btn-container">
        <button className="app-btn" onClick={randomContact}>
          Add Random Contact
        </button>
        <button className="app-btn" onClick={sortContactPopularity}>
          Sort by Popularity
        </button>
        <button className="app-btn" onClick={sortContactName}>
          Sort by name
        </button>
      </div>
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img className="app-img" src={contact.pictureUrl} alt={contact.name}></img>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toPrecision(4)}</td>
              <td>{contact.wonOscar && '🏆'}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td>
                <button onClick={() => deleteName(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
