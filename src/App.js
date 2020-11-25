import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [contactState, setContactState] = useState([]);
  const contactsNew = [...contactState];
  const contactsFive = contacts.slice(0, 5);

  const randomContactHandler = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    contactsNew.push(randomContact);
    setContactState(contactsNew);
  };

  return (
    <div className="App">
      <table>
        <th>
          <tr>IronContacts</tr>
          <button onClick={randomContactHandler}>Add Random Contact</button>
          <tr>
            <td className="contactsTable-data">Picture</td>
            <td className="contactsTable-data">Name</td>
            <td className="contactsTable-data">Popularity</td>
          </tr>
          {contactsFive.map((contact) => {
            return (
              <div className="contactsTable">
                <td className="contactsTable-Img">
                  <img src={contact.pictureUrl} alt={contact.name}></img>
                </td>
                <td className="contactsTable-data">{contact.name}</td>
                <td className="contactsTable-data">{contact.popularity}</td>
              </div>
            );
          })}
          {contactState.map((contact) => {
            return (
              <div className="contactsTable">
                <td className="contactsTable-Img">
                  <img src={contact.pictureUrl} alt={contact.name}></img>
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
