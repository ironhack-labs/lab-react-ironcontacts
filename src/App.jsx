import React, { useState } from 'react';
import "./App.css";
import contactsData from './contacts.json';

function App() {
  // Initialize state with the first 5 contacts
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    let added = false;
    if (newContacts.length === contacts.length) {
      alert("All data added");
    } else {
      while (!added) {
        const randomNumber = Math.floor(Math.random() * contacts.length);
        const randomContact = contacts[randomNumber];
        if (!newContacts.includes(randomContact)) {
          setNewContacts([...newContacts, randomContact]);
          added = true;
        }
      }
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

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table className="contacts">
        <thead>
          <tr className="contacts__header">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th className='spaced-column'>Won Oscar</th>
            <th className='spaced-column'>Won Emmy</th>
            <th className='spaced-column'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr className="card__contact" key={contact.id}>
              <td>
                <img
                  className="contact__image"
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="50"
                />
              </td>
              <td className="contact__name">{contact.name}</td>
              <td className="contact__popularity">
                {contact.popularity.toFixed(2)}
              </td>
              <td className="contact__wonOscar">
                {contact.wonOscar ? "🏆" : " "}
              </td>
              <td className="contact__wonEmmy">
                {contact.wonEmmy ? "🌟" : " "}
              </td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
