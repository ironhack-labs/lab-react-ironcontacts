import "./App.css";
import { useState } from "react";
import fullContactsList from "./contacts.json";

function App() {
  let firstFiveContacts = fullContactsList.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts);

  function getRandomContact() {
    let remainingContacts = fullContactsList.slice(5, 51);

    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContacts((contacts) => [...new Set([...contacts, randomContact])]);
  }

  function sortByName() {
    //In UTF-16 'a' = \u{61}
    setContacts((contacts) => [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1)));
  }

  function sortbyPopularity() {
    setContacts((contacts) => [...contacts].sort((a, b) => (a.popularity > b.popularity ? -1 : 1)));
  }

  function deleteContact(event) {
    let newArr = [...contacts].filter((contact) => contact.id !== event.currentTarget.id);
    setContacts(newArr);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={sortByName}>Sort alphabetically</button>
      <button onClick={getRandomContact}>Get random contact</button>
      <button onClick={sortbyPopularity}>Sort by popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>
            Won <br /> Oscar
          </th>
          <th>
            Won <br /> Emmy
          </th>
        </tr>
        {contacts.map((contact) => (
          <tr id={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name}></img>
            </td>
            <td>
              <p>{contact.name}</p>
            </td>
            <td>
              <p>{contact.popularity}</p>
            </td>
            <td>{contact.wonOscar ? "🏆" : false}</td>
            <td>{contact.wonEmmy ? "🏆" : false}</td>
            <td>
              <button id={contact.id} onClick={deleteContact}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
