import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

const initialContacts = contacts.slice(0, 5);

function App() {
  const [contact, setContact] = useState(initialContacts);
  return (
    <>
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>
                <h2>Picture</h2>
              </th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="contactPicture" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{Math.round(contact.popularity * 100) / 100}</td>
                  <td>{contact.wonOscar ? <h1>🏆</h1> : ""}</td>
                  <td>{contact.wonEmmy ? <h1>🏆</h1> : ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
