import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [contactState, setContactState] = useState();
  let contactsFive = contacts.slice(0, 5);

  return (
    <div className="App">
      <table>
        <th>
          <tr>IronContacts</tr>
          <tr>
            <td className="contactsTable-data">Picture</td>
            <td className="contactsTable-data">Name</td>
            <td className="contactsTable-data">Popularity</td>
          </tr>
          {contactsFive.map((contact) => {
            return (
              <div className="contactsTable">
                <td className="contactsTable-Img">
                  <img src={contact.pictureUrl}></img>
                </td>
                <td className="contactsTable-data">{contact.name}</td>
                <td className="contactsTable-data">{contact.popularity}</td>
              </div>
            );
          })}
        </th>
      </table>
    </div>
  );
}

export default App;
