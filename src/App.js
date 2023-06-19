import { useState } from 'react';
import './App.css';

import allContacts from './contacts.json'

function App() {
  const [contacts, updateContacts] = useState(allContacts.slice(0, 5));

  const addNewRandomContact = () => {
    const randomBound = allContacts.length - contacts.length;
    if (randomBound === 0) {
      return;
    }

    const randIndex = Math.floor(Math.random() * randomBound);
    const newContact = allContacts.filter(c => !contacts.includes(c))[randIndex];
    updateContacts([...contacts, newContact]);
  }

  const sortByPopularity = () => {
    updateContacts([...contacts.sort((a, b) => a.popularity - b.popularity)]);
  }

  const sortByName = () => {
    updateContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name))]);
  }

  const deleteContact= (id) => {
    updateContacts(contacts.filter(c => c.id !== id));
  }

  return (
    <div className="App">

    <h1>IronContacts</h1>

    <button onClick={addNewRandomContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
    <button onClick={sortByName}>Sort by name</button>

    <table>
      <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Won Oscar</td>
          <td>Won Emmy</td>
          <td></td>
        </tr>
      </thead>
    <tbody>
    { contacts.map(c => {
      return <tr key={c.id}>
      <td><img src={c.pictureUrl} alt={c.name} />  </td>
      <td>{c.name}</td>
      <td>{c.popularity.toFixed(2)}</td>
      <td>{c.wonOscar && "🏆"}</td>
      <td>{c.wonEmmy && "🏆"}</td>
      <td><button onClick={() => deleteContact(c.id)}>Delete</button></td>
      </tr>
    })}
    </tbody>
    </table>
    </div>
  );
}

export default App;
