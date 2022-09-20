import logo from "./logo.svg";
import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

// console.log(contactsArr);
// console.log(contactsArr.slice(0, 5));
// console.log(contactsArr[47]);

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 6));

  function pickRandomContact() {
    const randomNum = Math.floor(Math.random() * (contactsArr.length - 1));
    const randomContact = contactsArr[randomNum];

    const contactAlreadyInList = contacts.find(
      (element) => element.id === randomContact.id
    );

    if (!contactAlreadyInList) {
      setContacts([...contacts, randomContact]);
    }
  }

  function sortByPopularity() {
    const sorted = contacts.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    setContacts([...sorted]);
  }

  function sortByName() {
    const sorted = contacts.sort((a, b) => (a.name < b.name ? 1 : -1));
    setContacts([...sorted]);
  }

  function deleteContact() {
    const newContactsArr = contacts.filter(
      (contact) => contact.deletedContact !== contact.id
    );
    setContacts([...newContactsArr]);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div class="btn-container">
        <button onClick={pickRandomContact}>Add random contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    style={{ height: "200px" }}
                    src={contact.pictureUrl}
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td class="award">{contact.wonOscar ? "🏆" : ""}</td>
                <td class="award">{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button
                    class="btn-delete"
                    onClick={() => {
                      contact.deletedContact = contact.id;
                      deleteContact();
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
