// src/App.js

import React, { useState } from 'react';

import contacts from "./contacts.json";


function App() {

  const [contactsToDisplay, setcontactsToDisplay] = useState(contacts.slice(0, 5));

  const remainingContacts = contacts.slice(5)
  // const addRandomContact = (() => {
  //  // I would use math random and math floor but it was not working :( 
  // })

  return <div className="App">

    <button>Add random contact</button>
    {/* here is onClick missing but the whole function was not working */}

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
        {contactsToDisplay.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} height="100" />
            </td>
            <td>
              <p>{contact.name}</p>
            </td>
            <td>
              <p>{contact.popularity}</p>
            </td>
            <td>
              <p>{contact.wonOscar ? '🏆' : null}</p>
            </td>
            <td>
            <p>{contact.wonEmmy ? '🏆' : null}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
}




export default App;