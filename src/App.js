import React, { useState } from 'react';
import './App.css';

import contactsList from './contacts.json';
import ContactList from './components/ContactList.js';

const App = () => {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  const addRandomContact = () => {
    const i = Math.floor(Math.random() * contactsList.length);
    const newContact = contactsList[i];
    setContacts(contacts.concat(newContact));
  };

  const compareName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const comparePopularity = (a, b) => {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  };

  // console.log(contacts.sort(compareName))

  const sortName = () => {
    const sortedName = [...contacts.sort(compareName)]; // setState has to return a new object for react to detect change
    setContacts(sortedName);
  };

  const sortPopularity = () => {
    const sortedPop = [...contacts.sort(comparePopularity)];
    setContacts(sortedPop);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>IronContacts</h1>

        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortName}>Sort by Name</button>
        <button onClick={sortPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ContactList contacts={contacts} handleClick={deleteContact} />
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default App;
