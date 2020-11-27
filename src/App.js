import React, { useState, useEffect } from 'react';
import './App.css';
import contacts from './contacts.json';

const App = () => {
  const [contactState, setContactState] = useState([]);
  const contactsNew = [...contactState];

  useEffect(() => {
    setContactState(contacts.splice(0, 5));
  }, []);

  const randomContactHandler = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    setContactState([...contactsNew, randomContact]);
  };

  const nameSortHandler = () => {
    contactsNew.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
    setContactState([...contactsNew]);
  };

  const popularitySortHandler = () => {
    contactsNew.sort((a, b) => b.popularity - a.popularity);
    setContactState([...contactsNew]);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={randomContactHandler}>Add random contact</button>
      <button onClick={nameSortHandler}>Sort by name</button>
      <button onClick={popularitySortHandler}>Sort by popularity</button>
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
