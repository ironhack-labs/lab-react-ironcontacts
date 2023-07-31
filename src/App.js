import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  // Create a state variable to store the first 5 contacts
  const [contactList, setContactList] = useState(contacts.slice(15, 20));
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(20));

  // Function to add a random contact to the contactList
  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      // Create a new array with the random contact added to the contactList
      setContactList((prevContactList) => [...prevContactList, randomContact]);

      // Update the remainingContacts array by removing the selected random contact
      setRemainingContacts((prevRemainingContacts) =>
        prevRemainingContacts.filter((contact) => contact.id !== randomContact.id)
      );
    }
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
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
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? '🏆' : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
