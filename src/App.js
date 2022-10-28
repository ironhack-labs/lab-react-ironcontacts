// import contacts from './contacts.json';
import { useState } from 'react';
import './App.css';

let allContacts = require('./contacts.json');
const initialState = allContacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(initialState);
  const [sortingDirection, setSortingDirection] = useState(false);

  function randomContact(input) {
    let randomContact = input[Math.floor(Math.random() * input.length)];
    while (contacts.includes(randomContact)) {
      randomContact = input[Math.floor(Math.random() * input.length)];
    }
    return randomContact;
  }

  // Get a random contact
  function handleClickRandom() {
    setContacts((current) => [...current, randomContact(allContacts)]);
  }
  // Toggle sorting direction
  const toggleSortingDirection = () => {
    setSortingDirection((current) => !current);
  };
  // Sort by popularity
  function handleClickSortPop() {
    const contactsPopSort = [...contacts];
    contactsPopSort.sort((a, b) => {
      return sortingDirection ? b.popularity - a.popularity : a.popularity - b.popularity;
    });
    setContacts(contactsPopSort);
    toggleSortingDirection();
  }

  // Sort by name
  function handleClickSortName() {
    const contactsNameSort = [...contacts];
    contactsNameSort.sort((a, b) => {
      return sortingDirection ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    setContacts(contactsNameSort);
    toggleSortingDirection();
  }
  // Delete Contact
  function handleClickDelete(id) {
    const contactToDelete = contacts.findIndex((obj) => obj.id === id);
    const contactsMinusOne = [...contacts];
    contactsMinusOne.splice(contactToDelete, 1);
    setContacts(contactsMinusOne);
  }

  const buttonStyle = { padding: '5px', margin: '0 5px' };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleClickRandom} style={buttonStyle}>
        Add random Contact
      </button>
      <button onClick={handleClickSortPop} style={buttonStyle}>
        Sort by popularity
      </button>
      <button onClick={handleClickSortName} style={buttonStyle}>
        Sort by name
      </button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
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
                <td>
                  <button
                    onClick={(e) => {
                      handleClickDelete(contact.id);
                    }}
                  >
                    Delete
                  </button>
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
