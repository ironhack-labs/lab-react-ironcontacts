import "./App.css";
import { useState } from "react";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  function makeRandomContact() {
    let randomNumber = Math.floor(Math.random() * contactsJSON.length - 5);
    let randomContact = contactsJSON.slice(6)[randomNumber];
    setContacts([...contacts, randomContact]);
  }

  function sortByName() {
    let sortedArr = [...contacts].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedArr);
  }

  function sortByPopularity() {
    let sortedArr = [...contacts].sort((a, b) => {
      const nameA = a.popularity;
      const nameB = b.popularity;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedArr);
  }

  function deleteContact(contactId) {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => makeRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
      <p></p>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Delete Contact</th>
        </tr>

        {contacts.map((item) => {
          return (
            <tr>
              <td>
                <img height="100" src={item.pictureUrl} />
              </td>
              <td>{item.name}</td>
              <td>{item.popularity}</td>
              <td>{item.wonOscar ? "🏆" : ""}</td>
              <td>{item.wonEmmy ? "🏆" : ""}</td>
              <td>
                <button onClick={() => deleteContact(item.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
