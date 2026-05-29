import "./App.css";
import Contacts from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  const [random, setRandom] = useState([]);

  function addRandomContact() {
    const randomIndex = Math.floor(Math.random() * Contacts.length);
    const contact = Contacts[randomIndex];
    setRandom(prev => [...prev, contact]);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button type='button' onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((element) => (
            <tr key={element.id}>
              <td><img src={element.pictureUrl} alt={element.name} width="50"/></td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
              <td>{element.wonOscar ? '🏆' : ''}</td>
              <td>{element.wonEmmy ? '🏆' : ''}</td>
            </tr>
          ))}

          {random.map((element, index) => (
            <tr key={`random-${index}`}>
              <td><img src={element.pictureUrl} alt={element.name} width="50"/></td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
              <td>{element.wonOscar ? '🏆' : ''}</td>
              <td>{element.wonEmmy ? '🏆' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;