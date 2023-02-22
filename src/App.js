import "./App.css";
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));


  function addRandomContact() {
    const newContact =
      contactsList[Math.floor(Math.random() * contactsList.length)];

    if (!contacts.includes(newContact)) {
      setContacts([newContact, ...contacts]);
    }
  }

  function sortByPopularity() {
    const newContacts = [...contacts];

    newContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContacts(newContacts);
  }

  function sortByName() {
    const newContacts = [...contacts];

    newContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setContacts(newContacts);
  }

  function handleDeleteContact(contactId) {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  }



  return (
    <div className="App">
    <h1>IronContacts</h1>

    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
    <button onClick={sortByName}>Sort by name</button>

<table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contacts) => {
      return (
        <tr key={contacts.id} className="table">
          <td>
            <img src={contacts.pictureUrl} alt={contacts.name} />
          </td>
          <td>{contacts.name}</td>
          <td>{contacts.popularity}</td>
          <td>{contacts.wonOscar ? "🏆" : ""}</td>
          <td>{contacts.wonEmmy ? "🏆" : ""}</td>
          <button onClick={() => handleDeleteContact(contacts.id)}>
                    Delete
                  </button>
        </tr>
      );
    })}
  </tbody>
</table>
</div>
);
}

export default App;
