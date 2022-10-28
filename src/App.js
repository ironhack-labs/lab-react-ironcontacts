// import contacts from './contacts.json';
import { useState } from 'react';
import './App.css';

let allContacts = require('./contacts.json');
const initialState = allContacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(initialState);

  function randomContact(input) {
    let randomContact = input[Math.floor(Math.random() * input.length)];
    while (contacts.includes(randomContact)) {
      randomContact = input[Math.floor(Math.random() * input.length)];
    }
    return randomContact;
  }

  function handleClick() {
    setContacts((current) => [...current, randomContact(allContacts)]);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleClick} style={{ padding: '10px' }}>
        Add random Contact
      </button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img style={{ width: '50px' }} src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{contact.popularity}</p>
                </td>
                <td>
                  <p>{contact.wonOscar && '🏆'}</p>
                </td>
                <td>
                  <p>{contact.wonEmmy && '🏆'}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
