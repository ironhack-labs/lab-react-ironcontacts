import React, { useState } from 'react';
import './App.css';
import Contacts from './contacts';

function ShowContacts() {
  const [contacts, setContacts] = useState(Contacts.splice(0, 5));

  const randomContactHandler = () => {
    const contactCopy = [...contacts];
    const getRandomContact = () =>
      Contacts[
        Math.floor(
          Math.random() * (Contacts.length - (contacts.length - 1)) +
            (contacts.length - 1)
        )
      ];
    contactCopy.push(getRandomContact());

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

  const deleteHandler = (index) => {
    const contactCopy = [...contacts];
    contactCopy.splice(index, 1);
    setContacts(contactCopy);
  };

  return (
    <div className="contacts">
      <div className="buttonWrapper">
        <button onClick={randomContactHandler}>Add Random Contact</button>
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
        {contacts.map((item, index) => (
          <tr key={index}>
            <td>
              <img src={item.pictureUrl} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.popularity.toFixed(2)}</td>
            <td>
              <button onClick={deleteHandler}>Delete</button>
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
