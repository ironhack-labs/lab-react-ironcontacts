import "./App.css";
import { useState } from "react";
const newContacts = require("./contacts.json");

function App() {
  const [contacts, setContacts] = useState(newContacts.slice(0, 5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={() =>
          setContacts([
            ...contacts,
            newContacts[Math.floor(Math.random() * newContacts.length) + 5],
          ])
        }
      >
        Add random contact
      </button>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contact-img"
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
