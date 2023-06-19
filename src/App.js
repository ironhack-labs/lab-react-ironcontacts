import { useState } from 'react';
import './App.css';

import allContacts from './contacts.json'

function App() {
  const [contacts, updateContacts] = useState(allContacts.slice(0, 5));
  return (
    <div className="App">

    <h1>IronContacts</h1>

    <table>
      <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
        </tr>
      </thead>
    <tbody>
    { contacts.map(c => {
      return <tr>
      <td><img src={c.pictureUrl} alt={c.name} />  </td>
      <td>{c.name}</td>
      <td>{c.popularity.toFixed(2)}</td>
      </tr>
    })}
    </tbody>
    </table>
    </div>
  );
}

export default App;
