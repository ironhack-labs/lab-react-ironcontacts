//import "./App.css";
//import contacts from "./contacts.json";


/*function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
    </div>
  );
}

export default App;
*/


import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

  function handleAddRandomContact() {
    const remainingContacts = contacts.filter(
      (contact) => !firstFive.includes(contact)
    );

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    setFirstFive((prevFirstFive) => [...prevFirstFive, randomContact]);
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleAddRandomContact}>Sort by popularity</button>
      <button onClick={handleAddRandomContact}>Sort by name</button>


      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {firstFive.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;