import { useState } from "react";
import "./App.css";
import savedContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(savedContacts.slice(0, 5));

  function addRandomContact() {
    const remainingContacts = savedContacts.slice(5);
    const uniqueRemaining = remainingContacts.filter(
      (rc) => !contacts.some((c) => c.id === rc.id)
    );
    if (uniqueRemaining.length > 0) {
      const randomIndex = Math.floor(Math.random() * uniqueRemaining.length);
      setContacts([...contacts, uniqueRemaining[randomIndex]]);
    } else {
      console.log("No more unique contacts to add");
    }
  }

  function sortByPopularity() {
    const sortedContacts = [...contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  }

  function sortByName() {
    const sortedContacts = [...contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContacts);
  }

  function deleteContact(id) {
    const contactToDelete = contacts.find((contact) => id === contact.id);
    setContacts(
      contacts.filter((contact) => contact.id !== contactToDelete.id)
    );
  }

  return (
    <div className="App">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td scope="row">
                <img alt={contact.name} src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🌟" : null}</td>
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
