import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [fiveContact, setFiveContact] = useState(contacts.slice(0, 5));

  const deleteContact = (contactId) => {
    const filteredContact = fiveContact.filter((contact) => {
      return contact.id !== contactId;
    });
    setFiveContact(filteredContact);
  };

  function addRandom() {
    let sortedContact = [...fiveContact];
    let randomContact = Math.floor(Math.random() * contacts.length);
    let addRandomContact = contacts[randomContact];
    sortedContact.push(addRandomContact);

    if (fiveContact.length < 5) {
      setFiveContact.push(sortedContact);
    }
  }

  function sortPopularity() {
    const sortContact = [...fiveContact].sort(
      (a, b) => b.popularity - a.popularity
    );
    setFiveContact(sortContact);
  }

  const sortName = () => {
    const sortContact = [...contacts].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    setFiveContact(sortContact);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onclick={addRandom}>Add Random Contact</button>
      <button onclick={sortPopularity}>Sort by Popularity</button>
      <button onclick={sortName}>Sort by Name</button>

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
          {fiveContact.map(function (contact) {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} className="logo" />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
                <td>
                  <button
                    onClick={function () {
                      deleteContact(contact.id);
                    }}
                  >
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
