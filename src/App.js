import React, { useState } from 'react';
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(5, 10));
  const remainingContacts = contactsData.slice(10);

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert('No more contacts to add!');
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    setContacts([...contacts, randomContact]);
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const renderTrophy = (hasWon) => {
    if (hasWon) {
      return '🏆';
    }
    return null;
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contacts</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={sortByName}>Sort by Name</button>
        <button style={styles.button} onClick={sortByPopularity}>Sort by Popularity</button>
        <button style={styles.button} onClick={addRandomContact}>Add Random Contact</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Image</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Popularity</th>
            <th style={styles.tableHeader}>Won an Oscar</th>
            <th style={styles.tableHeader}>Won an Emmy</th>
            <th style={styles.tableHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} style={styles.tableRow}>
              <td style={styles.tableData}>
                <img src={contact.pictureUrl} alt={contact.name} style={styles.image} />
              </td>
              <td style={styles.tableData}>{contact.name}</td>
              <td style={styles.tableData}>{contact.popularity.toFixed(2)}</td>
              <td style={styles.tableData}>{renderTrophy(contact.wonOscar)}</td>
              <td style={styles.tableData}>{renderTrophy(contact.wonEmmy)}</td>
              <td style={styles.tableData}>
                <button style={styles.deleteButton} onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

const styles = {
  common: {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
  header: {
    background: 'lightblue',
    color: 'white',
    marginBottom: '20px',
    textAlign: 'center',
  },
  button: {
    background: 'white',
    border: '2px solid lightblue',
    color: 'lightblue',
    marginRight: '10px',
    ':hover': {
      background: 'lightblue',
      color: 'white',
    },
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  th: {
    background: 'lightblue',
    color: 'white',
    textAlign: 'left',
    padding: '10px',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  image: {
    width: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  trophy: {
    fontSize: '20px',
  },
  deleteButton: {
    background: 'red',
    border: 'none',
    color: 'white',
    ':hover': {
      background: 'darkred',
    },
  },
};