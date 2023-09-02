import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  function addRandom() {
    const randomContact =
      contactsData[
        Math.floor(Math.random() * (contactsData.length - 1 - 5) + 5)
      ];
    setContacts([...contacts, randomContact]);
  }

  function sortByName() {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  }

  function sortByPopularity() {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return +1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  }

  function deleteContact(contactId) {
    const filteredContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h1>
        IronContacts{" "}
        <img src="/movie-clapper-open.png" alt="movie-clapper-icon" />
      </h1>
      <div>
        <button className="btn primary" onClick={addRandom}>
          Add Random Contact
        </button>
        <button className="btn primary" onClick={sortByName}>
          Sort by name
        </button>
        <button className="btn primary" onClick={sortByPopularity}>
          Sort by popularity
        </button>
      </div>
      {contacts.map((oneContact) => {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>
                    <h2>Picture</h2>
                  </th>
                  <th>
                    <h2>Name</h2>
                  </th>
                  <th>
                    <h2>Popularity</h2>
                  </th>
                  <th>
                    <h2>Won Oscar</h2>
                  </th>
                  <th>
                    <h2>Won Emmy</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr key={oneContact.id} className="ContactCard">
                  <th>
                    <img
                      className="actor-img"
                      src={oneContact.pictureUrl}
                      alt="Picture of the actor"
                    />
                  </th>
                  <th>
                    <h3>{oneContact.name}</h3>
                  </th>
                  <th>
                    <p>{oneContact.popularity.toFixed(2)}</p>
                  </th>
                  <th>{oneContact.wonOscar && "🏆"}</th>
                  <th>{oneContact.wonEmmy && "🏆"}</th>
                </tr>
              </tbody>
            </table>
            <button
              className="btn delete"
              onClick={() => {
                deleteContact(oneContact.id);
              }}
            >
              Delete contact
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
