// src/App.js
import "./App.css";
import { useState } from "react";
import dataContacts from "./contacts.json";

function App() {
  const firstSixContacts = dataContacts.filter((contact, idx) => idx < 6);

  const [contacts, useContacts] = useState(firstSixContacts);

  console.log(contacts);

  return (
    <div className="App">
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
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contacts[0].name"
                    height={200}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
