import './App.css';
import contactData from './contacts.json';
import React, { useState } from 'react';

const contactList = contactData.splice(0, 5);
function App() {
  const [actorsList, setActorsList] = useState(contactList);
  console.log({ actorsList });
  const randomIndex = (max) => {
    return Math.random() * (max - 0) + 0;
  };

  const getRandomActor = () => {
    const randomContact = contactData.splice(
      randomIndex(contactData.length - 1),
      1
    );
    // contactList.push(randomContact);
    return randomContact[0];
  };

  const addActor = () => {
    const newContactList = [...actorsList];
    const newContact = getRandomActor();

    newContactList.push(newContact);
    setActorsList(newContactList);
  };

  const sortTable = (field) => {
    const actors = [...actorsList];

    actors.sort((a, b) => {
      if (field === 'popularity') return b.popularity - a.popularity;
      if (field === 'name') {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      }

      return 0;
    });

    setActorsList(actors);
  };

  const deleteContact = (id) => {
    const contacts = [...actorsList];

    const contactIndex = contacts.findIndex((el) => el.id === id);

    contacts.splice(contactIndex, 1);

    setActorsList(contacts);
  };

  const tableRows = actorsList.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt="" style={{ height: '140px' }} />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>
          {contact.wonOscar && (
            <img src="trophy.png" alt="" style={{ height: '40px' }} />
          )}
        </td>
        <td>
          {contact.wonEmmy && (
            <img src="trophy.png" alt="" style={{ height: '40px' }} />
          )}
        </td>
        <td>
          <button
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <button onClick={addActor}>Get Random Actor</button>
      <button
        onClick={() => {
          sortTable('popularity');
        }}
      >
        Sort by popularity
      </button>
      <button
        onClick={() => {
          sortTable('name');
        }}
      >
        Sort by name
      </button>
      <table>
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
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default App;
