import './App.css';
import { useState } from "react";
import contactsData from './contacts.json';


function App() {
  const allContacts = contactsData;
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = allContacts.filter(contact => !contacts.includes(contact));
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContacts(prevContacts => [...prevContacts, randomContact]);
  };

  function sortByName() {
    const sortedContacts = [...contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContacts);
  };

  function sortByPopularity() {
    const sortedContacts = [...contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
     <button onClick={addRandomContact}>Add Random Contact</button>
     <button onClick={sortByName}>Sort by Name</button>
     <button onClick={sortByPopularity}>Sort by Popularity</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? <span role="img" aria-label="Oscar Trophy">&#127942;</span> : null}</td>
            <td>{contact.wonEmmy ? <span role="img" aria-label="Emmy Trophy">&#127942;</span> : null}</td>
            <td><button onClick={() => handleDeleteContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};


export default App;
