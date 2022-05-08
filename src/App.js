import './App.css';
import contactsDataJSON from './contacts.json';
import { useState } from 'react';
import IronContacts from './components/IronContacts';
import RandomContact from './components/RandomContact';

function App() {
  const firstFive = contactsDataJSON.slice(0, 5);
  // console.log(firstFive);
  const randomContacts = contactsDataJSON.slice(6, contactsDataJSON.length);
  // console.log(randomContacts);
  const numberFive =
    randomContacts[Math.floor(Math.random() * randomContacts.length)];
  // console.log(numberFive);
  // const getRandomContact = Math.floor(Math.random() * randomContacts.length);
  // console.log(getRandomContact);

  const [contacts, setContacts] = useState(firstFive);
  // const [random, setRandomContacts] = useState(getRandomContact);

  // const sortByPop = contacts.sort((a, b) => b.popularity - a.popularity);
  // console.log(sortByPop);

  const randomClick = () => {
    const updatedContacts = [...contacts, numberFive];
    // console.log(updatedContacts);
    setContacts(updatedContacts);
  };
  // const sortByPopularity = () => {
  //   const updatedContacts = [...contacts, numberFive];
  //   console.log(updatedContacts);
  //   setContacts(updatedContacts);
  // };
  console.log(contacts);
  const sortByNombre = () => {
    const updatedContactsOne = [
      ...contacts.sort((a, b) => a.name.localeCompare(b.name)),
    ];

    console.log(updatedContactsOne);

    setContacts(updatedContactsOne);
    // console.log(sortByName);
  };
  const sortByPopularity = () => {
    const updatedContactsTwo = [
      ...contacts.sort((a, b) => b.popularity - a.popularity),
    ];

    console.log(updatedContactsTwo);

    setContacts(updatedContactsTwo);
    // console.log(sortByName);
  };
  const deleteActor = (actorId) => {
    const filteredActors = contacts.filter((contact) => {
      return contact.id !== actorId;
    });

    setContacts(filteredActors);
  };

  // const sortByPopularity = () => {
  //   setContacts(sortByPop);
  //   // console.log(sortByName);
  // };
  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={randomClick}>Add Random Contact</button>
      <button onClick={sortByPopularity}> Sort by popularity</button>
      <button onClick={sortByNombre}> Sort by name</button>
      <table style={{ width: '100%' }}>
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
        {contacts.map((contact) => (
          <tbody>
            <tr key={contact.id}>
              <td>{<img src={contact.pictureUrl}></img>}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar === false ? '' : <span>🏆</span>}</td>
              <td>{contact.wonEmmy === false ? '' : <span>🏆</span>}</td>
              <td>
                <button onClick={() => deleteActor(contact.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
