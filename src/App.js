import { useState } from 'react';
import './App.css';
import getContacts from './contacts.json';

function App() {
  // Iteration 1
  const fiveContacts = getContacts.slice(0,5);
  //console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts);
  // Iteration 3
  const remainingContacts = getContacts.slice(5, getContacts.length);
  //console.log(remainingContacts);

  const addRandomContact = () => {
    let randomRemainingContacts = Math.floor(Math.random() * remainingContacts.length);
    let getRandomContact = remainingContacts.splice(randomRemainingContacts, 1);
    console.log(randomRemainingContacts);
    console.log(getRandomContact[0]);
    setContacts([...contacts, getRandomContact[0]]);
  }

  return (
    <div className="App">
      {/* Iteration 3 */}
      <button onClick={addRandomContact} className="btn">Add Random Contact</button>
      {/* Iteration 1 */}
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            {/* Iteration 2 */}
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
                {/* Iteration 2 */}
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
