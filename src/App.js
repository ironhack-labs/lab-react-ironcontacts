import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const slicedContactsJSON = contactsJSON.slice(0, 5);
  const [contacts, setContacts] = useState(slicedContactsJSON);

  function addRandom() {
    const filteredContacts = contactsJSON.filter(
      (contact) => contacts.indexOf(contact) === -1
    );
    const random = Math.floor(Math.random() * filteredContacts.length);
    setContacts([...contacts, filteredContacts[random]]);
  }

  function sortByName() {
    const contactsArray = [...contacts];
    contactsArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts(contactsArray);
  }

  function sortByPopularity() {
    const contactsArray = [...contacts];
    contactsArray.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts(contactsArray);
  }

  function deleteItem(itemId) {
    const filteredContacts = contacts.filter(({ id }) => id !== itemId);
    setContacts(filteredContacts);
  }

  function reset() {
    setContacts(slicedContactsJSON);
  }

  return (
    <div className="app">
      <div className="button-container">
        <button onClick={addRandom}>Add random</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <button onClick={reset}>Reset</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won a Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(
            ({ id, name, pictureUrl, popularity, wonOscar, wonEmmy }) => {
              return (
                <tr key={id}>
                  <td>
                    <div
                      className="picture"
                      style={{ backgroundImage: `url(${pictureUrl})` }}
                    ></div>
                  </td>
                  <td className="name">{name}</td>
                  <td className="popularity">{popularity.toFixed(2)}</td>
                  <td className="oscar">
                    {wonOscar ? <p>🏆</p> : <p className="cross">❌​</p>}
                  </td>
                  <td className="emmy">
                    {wonEmmy ? <p>🏆</p> : <p className="cross">❌​</p>}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(id);
                      }}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
