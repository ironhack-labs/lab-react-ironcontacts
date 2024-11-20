import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactData, setContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) => !contactData.find((existing) => existing.id === contact.id)
    );

    if (remainingContacts.length > 0) {
      const randomContact =
        remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContacts([...contactData, randomContact]);
    }
  };

  const sortByPopularity = () => {
    const sortedByPopularity = [...contactData].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  };

  const sortByName = () => {
    const sortedByName = [...contactData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contactData.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    style={{ width: 90 }}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
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
