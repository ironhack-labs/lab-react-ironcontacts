import { useState } from 'react';
import './App.css';
import getContacts from './contacts.json';

function App() {
  // Iteration 1
  const fiveContacts = getContacts.slice(0,5);
  console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  {contact.pictureUrl
                  ? <img src={contact.pictureUrl} className="contact-img" alt="" />
                  : <img src="https://via.placeholder.com/182x268" alt="" />
                  }
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar
                  ? '🏆'
                  : ''
                  }
                </td>
                <td>
                  {contact.wonEmmy
                  ? '🏆'
                  : ''
                  }
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
