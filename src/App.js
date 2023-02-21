import "./App.css";
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  function addRandomContact() {
    const newContact = contactsList[Math.floor(Math.random() * contactsList.length)]
    if (!contacts.includes(newContact)) {
      setContacts([newContact, ...contacts]);
    }
  }
  
  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <div>
      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>won Oscar</th>
          <th>won Emmy</th>
        </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr key={contacts.id} className="table">
                <td>
                  <img src={contacts.pictureUrl} alt={contacts.name} />
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
                <td>{contacts.wonOscar ? "🏆" : ""}</td>
                <td>{contacts.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
          </tbody>
      </table>
      </div>
    </div>
  );
}
export default App;
