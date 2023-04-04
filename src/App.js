// src/App.js
import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

const contactsCopy = [...contacts];
const fiveContacts = contactsCopy.splice(0, 5);
const restOfContacts = contactsCopy.splice(5);
const updatedArray = [...fiveContacts];

console.log("rest of contacts", updatedArray);

function App() {
  const [contacts, setContacts] = useState(fiveContacts);

  const popularity = contacts.popularity;

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * restOfContacts.length);
    const randomContact = restOfContacts[randomIndex];
    const newContacts = [...contacts, randomContact];
    console.log("newContacts.....", newContacts);
    return setContacts(newContacts);
  };

  const sortByName = () => {
    const contactsCopy = [...contacts];
    contactsCopy.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return setContacts(contactsCopy);
  };

  const sortByPopularity = () => {
    const contactsCopy2 = [...contacts];
    contactsCopy2.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    return setContacts(contactsCopy2);
  };
  const deleteContact = (id) => {
    console.log("deleting", id);
    const newList = contacts.filter(
      (contactDetails) => contactDetails.id !== id
    );
    return setContacts(newList);
  };

  return (
    <div className="App">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      <table>
        <tbody>
          <h1>IronContacts</h1>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populiarity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <div>
                  <img className="contactImg" src={contact.pictureUrl} alt="" />
                </div>
                <th>{contact.name}</th>
                <th>{contact.popularity.toFixed(2)}</th>
                <th>{contact.wonOscar ? <p>🏆</p> : <p></p>}</th>
                <th>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</th>
                <button className="deleteBtn"
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                >
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
