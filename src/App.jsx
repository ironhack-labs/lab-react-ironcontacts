import { useState, useEffect } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const filteredActors = contactsData.filter((actor) =>
      [
        "Matt Damon",
        "David Harbour",
        "Ansel Elgort",
        "Maria Bello",
        "Ryan Reynolds"
      ].includes(actor.name)
    );

    setContacts(filteredActors);
  }, []);

  function addRandomContact() {
    const newContacts = [...contacts];
    const randomIndex = Math.floor(Math.random() * contactsData.length);
    const randomContact = contactsData[randomIndex];
    newContacts.unshift(randomContact);
    setContacts(newContacts);
  }

  function sortFunction() {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  }

  function sortByName() {
    const sortedContactsByName = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContactsByName);
  }

  function deleteContact(id) {
    const newList = [...contacts].filter((contact) => contact.id !== id);
    setContacts(newList);
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button style={{ margin: "10px" }} onClick={addRandomContact}>
        Add Random Contact
      </button>

      <button style={{ margin: "10px" }} onClick={sortFunction}>
        Sort by popularity
      </button>
      <button style={{ margin: "10px" }} onClick={sortByName}>
        Sort by name
      </button>

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
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "⭐" : ""}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
