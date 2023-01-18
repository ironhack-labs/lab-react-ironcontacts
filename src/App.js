import { useState } from 'react';
import './App.css';
import getContacts from './contacts.json';

const remainingContacts = getContacts.slice(5, getContacts.length);

function App() {
  // Iteration 1
  const fiveContacts = getContacts.slice(0,5);
  console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts);
  // Iteration 3 // check for random not getting duplicates and implement
  //console.log(remainingContacts);

  const addRandomContact = () => {
    let randomRemainingContacts = Math.floor(Math.random() * remainingContacts.length);
    let getRandomContact = remainingContacts.splice(randomRemainingContacts, 1);
    //console.log(remainingContacts);
    //console.log(getRandomContact[0]);
    if (remainingContacts.length > 0) {
      setContacts([getRandomContact[0], ...contacts]);
    }
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
      <h1>
        <span>Iron</span>
        <span>Contacts</span>
	    </h1>
      {/* Iteration 3 */}
      <button onClick={addRandomContact} className="btn">Add Random Contact</button>
      {/* Iteration 4 */}
      <button onClick={sortAlphabetically} className="btn">Sort by Name</button>
      <button onClick={sortPopularity} className="btn">Sort by Popularity</button>
      {/* Iteration 1 */}
      <div align="center">
      <table className="styled-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Popularity</th>
            {/* Iteration 2 */}
            <th align='center'>Won an Oscar</th>
            <th align='center'>Won an Emmy</th>
            {/* Iteration 5 */}
            <th>&nbsp;</th>
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
                <td align='center'>{(Math.ceil(contact.popularity) / 2).toFixed(2)}</td>
                {/* Iteration 2 */}
                <td align='center'>
                  {contact.wonOscar
                  ? '🏆'
                  : ''
                  }
                </td>
                <td align='center'>
                  {contact.wonEmmy
                  ? '🏆'
                  : ''
                  }
                </td>
                {/* Iteration 5 */}
                <td><button onClick={() => {deleteContact(contact.id)}} className="btn delete">Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>    
    </div>
  );
}

export default App;
