import "./App.css";
import Contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  const addRandomContact = () => {
    const currentContactIds = contacts.map((contact) => contact.id);
    const notAddedContacts = Contacts.filter(
      (contact) => !currentContactIds.includes(contact.id)
    );
    const randomContact =
      notAddedContacts[Math.floor(Math.random() * notAddedContacts.length)];

    if (randomContact) {
      setContacts((prevContacts) => [...prevContacts, randomContact]);
    } else {
      alert("All contacts are added!");
    }
  };

  const sortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="5">
              IronContacts
              <button onClick={addRandomContact}>Add Random Contact</button>
              <button onClick={sortByName}>Sort by Name</button>
              <button onClick={sortByPopularity}>Sort by Popularity</button>
            </th>
          </tr>
          <tr className="column-names">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>remove</th> {/* New header for the remove button */}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, id) => {
            return (
              <tr key={id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="100px"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button onClick={() => removeContact(contact.id)}>
                    Remove Contact
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
