import React, { useState } from 'react';
import './App.css';
import Contacts from './contacts';

const firstFive = Contacts.slice(0, 5);

function ShowContacts() {
  const [contacts, setContacts] = useState(firstFive);

  const addRandomContactHandler = () => {
    let contactCopy = [...contacts];

    const getRandomContact = () =>
      Contacts[Math.floor(Math.random() * Contacts.length - 4) + 4];

    contactCopy.push(getRandomContact());
    Contacts.splice(Contacts.indexOf(contactCopy[contactCopy.length - 1]), 1);

    setContacts(contactCopy);
  };

  const sortNameHandler = () => {
    let contactCopy = [...contacts];

    contactCopy = contactCopy.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setContacts(contactCopy);
  };

  const sortPopularityHandler = () => {
    let contactCopy = [...contacts];

    contactCopy = contactCopy.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContacts(contactCopy);
  };

  const deleteHandler = (contactId) => {
    const contactCopy = [...contacts];
    const contactIndex = contactCopy.findIndex((item) => item.id === contactId);
    contactCopy.splice(contactIndex, 1);
    Contacts.push(contactCopy[contactIndex]);
    setContacts(contactCopy);
  };

  return (
    <div className="contacts">
      <div className="buttonWrapper">
        <button onClick={addRandomContactHandler}>Add Random Contact</button>
        <button onClick={sortNameHandler}>Sort by Name</button>
        <button onClick={sortPopularityHandler}>Sort by Popularity</button>
      </div>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {contacts.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.pictureUrl} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.popularity.toFixed(2)}</td>
            <td>
              <button onClick={() => deleteHandler(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <ShowContacts />
    </div>
  );
}

export default App;
