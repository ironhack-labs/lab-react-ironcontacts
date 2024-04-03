import React, { useState } from 'react';
import styles from './App.module.css';
import contacts from "./contacts.json";

function App() {
  // Initialize state with the first 5 contacts
  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0, 5));

  const [sortState, setSortState] = useState({ name: 'desc', popularity: 'asc' });

  const toggleSortOrder = (sortBy) => {
    return sortState[sortBy] === 'asc' ? 'desc' : 'asc';
  };

  // Function to add a random contact from the remaining contacts
  const addRandomContact = () => {
    const remainingContacts = contacts.filter(contact => !displayedContacts.includes(contact));
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setDisplayedContacts([...displayedContacts, randomContact]);
    }
  };

  // Function to delete a contact
  const deleteContact = (contactId) => {
    setDisplayedContacts(displayedContacts.filter(contact => contact.id !== contactId));
  };

  // Function to sort contacts by name or popularity with toggle
  const sortContacts = (sortBy) => {
    const order = toggleSortOrder(sortBy);
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      let comparison = 0;
      if (typeof a[sortBy] === 'string') {
        comparison = a[sortBy].localeCompare(b[sortBy]);
      } else if (typeof a[sortBy] === 'number') {
        comparison = a[sortBy] - b[sortBy];
      }

      return order === 'asc' ? comparison : -comparison;
    });

    // Update displayedContacts with the newly sorted contacts
    setDisplayedContacts(sortedContacts);
    // Update the sort state to toggle the order for the next sort
    setSortState({ ...sortState, [sortBy]: order });
  };


  return (
    <div className={styles.App}>
      <h1>LAB | React IronContacts</h1>
      <button type="button" onClick={addRandomContact} className={styles.button}>Add Random Contact</button>
      <button onClick={() => sortContacts('name')} className={styles.button}>Sort by name</button>
      <button onClick={() => sortContacts('popularity')} className={styles.button}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: "50px" }} className={styles.img} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button type="button" onClick={() => deleteContact(contact.id)} className={styles.DeleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
