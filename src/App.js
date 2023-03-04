import './App.css';
import contactData from './contacts.json';
import React, { useState } from 'react';

const contactList = contactData.splice(0, 5);

function App() {
  const [actorsList, setActorsList] = useState(contactList);
  const randomIndex = (max) => {
    return Math.random() * (max - 0) + 0;
  };

  const getRandomActor = () => {
    if (contactData.length) {
      const randomContact = contactData.splice(
        randomIndex(contactData.length - 1),
        1
      );
      return randomContact[0];
    }
    return false;
  };

  const addActor = () => {
    const newContact = getRandomActor();
    if (newContact) actorsList.unshift(newContact);
    else console.log('no contact');
    setActorsList([...actorsList]);
  };

  const sortTable = (field) => {
    actorsList.sort((a, b) => {
      if (field === 'popularity') return b.popularity - a.popularity;
      if (field === 'name') {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      }

      return 0;
    });

    setActorsList([...actorsList]);
  };

  const deleteContact = (id) => {
    const contactIndex = actorsList.findIndex((el) => el.id === id);

    actorsList.splice(contactIndex, 1);

    setActorsList([...actorsList]);
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
      <h1>IronContacts</h1>
      <div className={'actionButtons'}>
        <button onClick={addActor}>Add Random Contact</button>
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
      </div>
      <div className={'table'}>
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
    </div>
  );
}

export default App;
