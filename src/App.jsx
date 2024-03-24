import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const initialContact = contactsData.slice(0, 5);

  const contactsData1 = contactsData.slice(5);

  const [contacts, setContact] = useState(initialContact);

  function handleClickAdd() {
    let random = Math.floor(Math.random() * contactsData1.length);
    let newContact = contactsData1[random];
    setContact((prev) => [newContact, ...prev]);
  }

  function handleSortName() {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContact(sortedContacts);
  }

  function handleSortPop() {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContact(sortedContacts);
  }
  function handleRemove(id) {
    const removedarr = contacts.filter((contact) => id !== contact.id);
    setContact(removedarr);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleClickAdd}>add random Contact</button>
      <button onClick={handleSortName}>sort by name</button>
      <button onClick={handleSortPop}>sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
            <th>won oscar</th>
            <th>won emmy</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    className="imac"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? `🏆` : null}</td>
                <td>{contact.wonEmmy ? `🌟` : null}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(contact.id);
                    }}
                  >
                    remove contact
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
