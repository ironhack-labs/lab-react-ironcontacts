import React, { useState, useEffect } from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  const [contactState, setContactState] = useState([]);

  useEffect(() => {
    const first5 = contacts.slice(0, 5);
    setContactState(first5);
  }, []);

  const addRandomContact = () => {
    const copyOfContacts = [...contactState];
    const randomContact =
      contacts[Math.floor(Math.random() * (contacts.length - 4) + 4)];
    copyOfContacts.push(randomContact);
    setContactState(copyOfContacts);
  };

  const sortByName = () => {
    const copyOfContacts = [...contactState];
    copyOfContacts.sort((a, b) => a.name.localeCompare(b.name));
    setContactState(copyOfContacts);
  };

  const sortByPopularity = () => {
    const copyOfContacts = [...contactState];
    copyOfContacts.sort((a, b) => b.popularity - a.popularity);
    setContactState(copyOfContacts);
  };

  const deleteContact = (id) => {
    const copyOfContacts = [...contactState];
    const index = copyOfContacts.findIndex((item) => item.id == id);
    copyOfContacts.splice(index, 1);
    setContactState(copyOfContacts);
  };

  return (
    <div className="app">
      <div className="top">
        <h1>Iron Contacts</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort By Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactState.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <img
                      style={{ width: '50px', height: '60px' }}
                      src={item.pictureUrl}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.popularity}</td>
                  <td>
                    <button onClick={() => deleteContact(item.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
