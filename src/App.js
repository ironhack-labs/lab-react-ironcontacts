// src/App.js
import './App.css';
import contacts from './contacts.json';

import { useState } from 'react';

const firstFiveContacts = contacts.slice(0, 5);
const remainingContacts = contacts.slice(5);

let message = '';
function App() {
  const [contactsToDisplay, setContactsToDisplay] = useState(firstFiveContacts);
  const [remainingToDisplay, setRemainingToDisplay] =
    useState(remainingContacts);

  //Add Random
  const addRandomContact = () => {
    if (remainingToDisplay.length === 0) {
      message = <h2>Sorry, no more contact to add</h2>;
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingToDisplay.length);
    const randomContact = remainingToDisplay[randomIndex];

    setContactsToDisplay([...contactsToDisplay, randomContact]);
    const updatedRemainingContacts = remainingToDisplay.filter((contact) => {
      if (contact.id === randomContact.id) {
        return false;
      } else {
        return true;
      }
    });
    setRemainingToDisplay(updatedRemainingContacts);
  };

  //Sort by Name
  const sortByName = () => {
    let sortedByName = [...contactsToDisplay].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactsToDisplay(sortedByName);
  };

  //Sort by Popularity
  const sortByPopularity = () => {
    let sortedByPopularity = [...contactsToDisplay].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactsToDisplay(sortedByPopularity);
  };

  //Delete
  const deleteContact = (contactId) => {
    const updatedContacts = contactsToDisplay.filter((contact) => {
      return contact.id !== contactId;
    });

    setContactsToDisplay(updatedContacts);
  };

  if (contactsToDisplay.length <= 0) {
    message = <h2>Sorry, no contacts to display</h2>;
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      {message}
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table className="table">
        <thead className="table-head">
          <tr >
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img className="image" src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && <>🏆</>}</td>
                <td>{contact.wonEmmy && <>🏆</>}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>{' '}
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
