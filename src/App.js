// import logo from './logo.svg';
import contactsMovie from "./contacts.json";
import { useState } from "react";

import "./App.css";

function App() {
  // const fiveContacts = contactsMovie.slice(0, 5);

  const [contacts, setContacts] = useState(contactsMovie.slice(0, 5));

  // iteration 2

  // iteration 3
  // const restContacts = contactsMovie.slice(5, contacts.length);
  function randomContact() {
    let getRandomContact =
      contactsMovie[Math.floor(Math.random() * contactsMovie.length)];

    setContacts([getRandomContact]);

    let newContacts = [...contacts];
    newContacts.push(getRandomContact);
    setContacts(newContacts);
  }

  // iteration 4 sort by name and popularity
  function contactSort() {
    const alphabet = [...contacts];
    alphabet.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
    setContacts(alphabet);
  }

  function popularitySort() {
    const popularity = [...contacts];
    popularity.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (b.popularity < a.popularity) {
        return -1;
      }
      return 0;
    });
    setContacts(popularity);
  }

  // iteration 5
  function deleteContact(id) {
    const filteredContact = contacts.filter((contacts) => {
      return contacts.id !== id;
    });
    setContacts(filteredContact);
  }

  return (
    <div className="App">
      <h2>Iron Contacts</h2>
      <button onClick={randomContact}>Add random contact</button>
      <button onClick={popularitySort}>Sort by popularity</button>
      <button onClick={contactSort}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr>
                <td>
                  <img src={contacts.pictureUrl} alt="Movie Stars" />
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity.toFixed(2)}</td>
                <td>{contacts.wonOscar && <span>🏆</span>} </td>
                <td>{contacts.wonEmmy && <span>🏆</span>} </td>
                <td>
                  <button onClick={() => deleteContact(contacts.id)}>
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
