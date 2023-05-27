import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [fiveContacts, setFiveContacts] = useState(contacts.slice(0, 5));
  console.log(fiveContacts);

  return (
    <div className="App">
      <table>
        <thead>
          <th colspan="3">IronContacts</th>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((contact) => {
            return (
              <tr>
                {" "}
                <td>
                  {" "}
                  <img src={contact.pictureUrl} />{" "}
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
