import "./App.css";
import { useState } from "react";
import allContacts from "./contacts.json";

function App() {
  const contactsInitial = allContacts.slice(0, 5);

  const [contacts, setContacts] = useState(contactsInitial);

  function addRandom() {
    const randNum = Math.floor(Math.random() * allContacts.length);
    const randContact = allContacts[randNum];
    const newContacts = [...contacts, randContact];
    setContacts(newContacts);
  }

  function sortByName() {
    const sortArray = [...contacts];
    sortArray.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortArray);
  }

  function sortByPopularity() {
    const sortArray = [...contacts];
    sortArray.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortArray);
  }

  function removeContacts(contactId) {
    console.log("borrando");
    const newContacts = contacts.filter((contact) => {
      return contactId !== contact.id;
    });
    setContacts(newContacts);
  }

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
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
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="80px"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>
                  {contact.wonOscar && (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/206/206982.png"
                      alt="oscar"
                      width="50px"
                    />
                  )}
                </td>
                <td>
                  {contact.wonEmmy && (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Emmy_Icon.png"
                      alt="emmy"
                      width="30px"
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => removeContacts(contact.id)}>
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
