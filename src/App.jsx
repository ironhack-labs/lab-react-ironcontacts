import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) =>
        !contactsList.some(
          (existingContact) => existingContact.id === contact.id
        )
    );

    if (remainingContacts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    setContactsList([...contactsList, randomContact]);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactsList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactsList(sortedContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contactsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactsList(sortedContacts);
  };

  const handleDelete = (contactId) => {
    const filteredConctacts = contactsList.filter(
      (contact) => contact.id !== contactId
    );
    setContactsList(filteredConctacts);
    console.log(contactId);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <section className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}> Sort by popularity </button>
        <button onClick={sortByName}> Sort by name </button>
      </section>
      <table className="table">
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
          {contactsList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  className="image"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🌟" : null}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
