import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const [contactsToDisplay, setContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const displayingContacts = contacts.filter(contact => !contactsToDisplay.includes(contact));
    const randomIndex = Math.floor(Math.random() * displayingContacts.length);
    const randomContact = displayingContacts[randomIndex];
    setContacts(existingContacts => [...existingContacts, randomContact]);
  };

  const sortByName = () => {
    const sortedContacts = [...contactsToDisplay].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactsToDisplay].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const removeContact = (id) => {
    const keepContacts = contactsToDisplay.filter(contact => contact.id !== id);
    setContacts(keepContacts);
  };

  return (
    <div className="App">
      <button className="button" onClick={addRandomContact}>Add Random Contact</button>
      <button className="button" onClick={sortByName}>Sort by Name</button>
      <button className="button" onClick={sortByPopularity}>Sort by Popularity</button>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img className="contact-thumbnail" src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td>
                <button className="button" onClick={() => removeContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
