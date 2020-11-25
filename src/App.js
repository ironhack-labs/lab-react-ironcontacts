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

  return (
    <div>
      <button onClick={randomContactHandler}>Add Random Contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contacts.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.pictureUrl} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.popularity}</td>
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
