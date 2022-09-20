// import logo from './logo.svg';
import contacts from './contacts.json';
import { useState } from 'react';
import ContactEntry from './Components/ContactEntry';

import './App.css';

function App() {
  // const c = [];

  // Iteration 1
  const fiveContacts = contacts.slice(0, 5);


  // Iteration 2
  const [contactsState, setContactsState] = useState(fiveContacts);


  const addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContacts = [...contactsState, randomContact];
    // newContacts.push(randomContact);
    setContactsState(newContacts);
    // console.log(newContacts);
  };

  // Iteration 3
  const sortByName = () => {
    const sortedContacts = [...contactsState].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContactsState(sortedContacts);
  };


  // Iteration 4
  const sortByPopularity = () => {
    const sortedContacts = [...contactsState].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactsState(sortedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <ContactEntry contactList={contactsState} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
