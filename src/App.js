// import contacts from './contacts.json';
import { useState } from 'react';
import './App.css';

let contacts = require('./contacts.json');
const firstFive = contacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState({ firstFive });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {firstFive.map((contact) => {
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
