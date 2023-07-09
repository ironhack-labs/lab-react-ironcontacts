import { useState, useEffect } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const filteredActors = contactsData.filter((actor) =>
      [
        "Matt Damon",
        "David Harbour",
        "Ansel Elgort",
        "Maria Bello",
        "Ryan Reynolds"
      ].includes(actor.name)
    );

    setContacts(filteredActors);
  }, []);

  function addRandomContact() {
    const newContacts = [...contacts];
    const randomIndex = Math.floor(Math.random() * contactsData.length);
    const randomContact = contactsData[randomIndex];
    newContacts.push(randomContact);
    setContacts(newContacts);
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>

      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
