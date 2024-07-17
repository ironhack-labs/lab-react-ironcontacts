import "./App.css";
import contacts from "./contacts.json"
import { useState } from 'react';

export default  function App() {

  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));
  const addRandomContact = () => {
   
    const remainingContacts = contacts.filter(
      (contact) => !contactsList.some((c) => c.id === contact.id)
    );

    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContactsList([...contactsList, randomContact]);
    }
  };
  const sortByName = () => {
    const sortedContacts = [...contactsList].sort((a, b) => a.name.localeCompare(b.name));
    setContactsList(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactsList].sort((a, b) => b.popularity - a.popularity);
    setContactsList(sortedContacts);
  };
  const removeContact = (id) => {
    const updatedContacts = contactsList.filter((contact) => contact.id !== id);
    setContactsList(updatedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th style={{ padding: '15px' }}>Pictures</th>
            <th style={{ padding: '15px' }}>Name</th>
            <th style={{ padding: '15px' }}>Popularity</th>
            <th style={{ padding: '15px' }}>Won <br />an Oscar</th>
            <th style={{ padding: '15px' }}>Won <br />an Emmy</th>
            <th style={{ padding: '15px' }}>Actions</th>
          </tr>
          </thead>
          <tbody>
          {contactsList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
      </table>  
    </div>
  );
}
