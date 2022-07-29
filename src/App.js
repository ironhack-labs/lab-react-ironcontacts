// src/App.js
import "./App.css";
import { useState } from "react";
import dataContacts from "./contacts.json";

function App() {
  const firstSixContacts = dataContacts.filter((item, idx) => idx < 6);

  const [contacts, setContacts] = useState(firstSixContacts);

  console.log("yo soy antes de pushear ", contacts);
  const HandlerRandom = () => {
    setContacts((prevVals) => [
      ...prevVals,
      dataContacts[
        Math.floor(
          Math.random() * (dataContacts.length - 0 + 1) +
            0
        )
      ],
    ]);

    console.log("yo soy despues de pushear ", contacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        className="button"
        onClick={() => {
          HandlerRandom();
        }}
      >
        Random contact
      </button>
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
