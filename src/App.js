import './App.css';
import contactsDataJSON from './contacts.json';
import { useState } from 'react';
import IronContacts from './components/IronContacts';
import RandomContact from './components/RandomContact';

function App() {
  const firstFive = contactsDataJSON.slice(0, 5);
  console.log(firstFive);
  const randomContacts = contactsDataJSON.slice(6, contactsDataJSON.length);
  console.log(randomContacts);
  const numberFive = randomContacts[0];
  console.log(numberFive);
  const getRandomContact = Math.floor(Math.random() * randomContacts.length);
  console.log(getRandomContact);
  const [contacts, setContacts] = useState(firstFive);
  // const [random, setRandomContacts] = useState(getRandomContact);

  const randomClick = (getRandomContact) => {
    const updatedActor = [...contacts, getRandomContact];

    setContacts(updatedActor);
  };

  return (
    <div className='App'>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {/* <RandomContact addRandom={randomClick} /> */}
        {contacts.map((contact) => (
          <tr>
            <td>{<img src={contact.pictureUrl}></img>}</td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar === false ? '' : <span>🏆</span>}</td>
            <td>{contact.wonEmmy === false ? '' : <span>🏆</span>}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
