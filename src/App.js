import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";
import "./App.css";
import contactsJson from "./contacts.json";
function App() {
  let firstFive = contactsJson.slice(0, 5);

  const [contacts, setContacts] = useState(firstFive);

  function random() {
    let randomNumber = Math.floor(Math.random() * contactsJson.length);
    let randomContact = contactsJson[randomNumber];
    let updated = [...contacts, randomContact];
    console.log(updated);
    setContacts(updated);
  }

  function sortByName() {
    let names = [...contacts];
    names.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(names);
  }
  function sortByPopularity() {
    let rating = [...contacts];
    rating.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(rating);
  }

  function deleteContact(id) {
    const name = [...contacts];
    const newArr = name.filter((contact) => {
      return id !== contact.id;
    });
    setContacts(newArr);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={random}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead></thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} width="50px" />
                </td>
                <td>{contact.name}</td>

                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : "no"}</td>
                <td>{contact.wonEmmy ? "🏆" : "no"}</td>
                <button onClick={() => deleteContact(contact.id)}>
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
