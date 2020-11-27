import React, { useState, useEffect } from 'react';
import './App.css';
import contacts from './contacts.json';

const App = () => {
  const [contactState, setContactState] = useState([]);
  const contactsNew = [...contactState];

  useEffect(() => {
    setContactState(contacts.splice(0, 5));
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th className="contactsTable-data">Picture</th>
            <th className="contactsTable-data">Name</th>
            <th className="contactsTable-data">Popularity</th>
          </tr>
        </thead>
        {contactsNew.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr className="contactsTable">
                <td className="contactsTable-Img">
                  <img src={contact.pictureUrl} alt={contact.name}></img>
                </td>
                <td className="contactsTable-data">{contact.name}</td>
                <td className="contactsTable-data">{contact.popularity}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default App;
