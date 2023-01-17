import { useState } from 'react';
import './App.css';
import getContacts from './contacts.json';

function App() {
  // Iteration 1
  const fiveContacts = getContacts.slice(0,5);
  console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts);
  // Iteration 3
  const remainingContacts = getContacts.slice(5, getContacts.length);
  //console.log(remainingContacts);

  const addRandomContact = () => {
    let randomRemainingContacts = Math.floor(Math.random() * remainingContacts.length);
    let getRandomContact = remainingContacts.splice(randomRemainingContacts, 1);
    //console.log(randomRemainingContacts);
    //console.log(getRandomContact[0]);
    setContacts([...contacts, getRandomContact[0]]);
  }
  // Iteration 4
  // Sort by Name Alphabetically
  const sortAlphabetically = () => {
    const sortedAlphabetically = [...contacts.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    })];
    setContacts(sortedAlphabetically);
  }
  // Sort by Popularity
  const sortPopularity = () => {
    const sortedPopularity = [...contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    })];
    setContacts(sortedPopularity);
  }
  // Iteration 5
  const deleteContact = (id) => {
    console.log('Delete Contact', id);
    const filteredContacts = contacts.filter( (contact) => {
        return contact.id !== id;
    });
    // Update State
    setContacts(filteredContacts);
}

  return (
    <div className="App">
      {/* Iteration 3 */}
      <button onClick={addRandomContact} className="btn">Add Random Contact</button>
      {/* Iteration 4 */}
      <button onClick={sortAlphabetically} className="btn">Sort by Name</button>
      <button onClick={sortPopularity} className="btn">Sort by Popularity</button>
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
            {/* Iteration 5 */}
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
                {/* Iteration 5 */}
                <td><button onClick={() => {deleteContact(contact.id)}}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
