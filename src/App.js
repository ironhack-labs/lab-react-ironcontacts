import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); 

  const addRandomContact = () => {
    const nextContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );
    const randomList = Math.floor(Math.random() * nextContacts.length);
    const randomContact = nextContacts[randomList];
    setContacts((formerContacts) => [...formerContacts, randomContact]);
  };

  const sortByName = () => {
    const groupedContacts = [...contacts].sort((first, second) =>
      first.name.localeCompare(second.name)
    );
    setContacts(groupedContacts);
  };

  const sortByPopularity = () => {
    const groupedContacts = [...contacts].sort(
      (first, second) => second.popularity - first.popularity
    );
    setContacts(groupedContacts);
  };

  const eraseContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>

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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
              <td>
                <button onClick={() => eraseContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
