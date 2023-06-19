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

  return (
    <div className="App">

    <h1>IronContacts</h1>

    <button onClick={addNewRandomContact}>Add Random Contact</button>

    <table>
      <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Won Oscar</td>
          <td>Won Emmy</td>
        </tr>
      </thead>
    <tbody>
    { contacts.map(c => {
      return <tr>
      <td><img src={c.pictureUrl} alt={c.name} />  </td>
      <td>{c.name}</td>
      <td>{c.popularity.toFixed(2)}</td>
      <td>{c.wonOscar && "🏆"}</td>
      <td>{c.wonEmmy && "🏆"}</td>
      <td></td>
      </tr>
    })}
    </tbody>
    </table>
    </div>
  );
}

export default App;
