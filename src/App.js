import React from 'react';
import './App.css';
import Contacts from './contacts.json';
import Card from './components/Card';

function App() {
  const listOfContacts = Contacts.slice(0, 5);

  function createCard(contact) {
    return (
      <Card
        pictureUrl={contact.pictureUrl}
        name={contact.name}
        popularity={contact.popularity}
      />
    );
  }

  function addRandom() {
    const getRandom = Contacts[Math.floor(Math.random() * Contacts.length)];
    listOfContacts.push(getRandom);
  }

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <button onClick={addRandom}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {listOfContacts.map(createCard)}
        </table>
      </div>
    </div>
  );
}

export default App;
