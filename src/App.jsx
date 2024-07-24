import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json"

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(contact => !contacts.some(c => c.id === contact.id));
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    if (randomContact) {
      setContacts([...contacts, randomContact]);
    }

  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const removeContact = (id) => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };


  return (
        <div className="container">
        <button onClick={addRandomContact}> Add Random Contact</button>
        <button onClick={sortByName}> Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} width="100" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
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
  
  export default App;