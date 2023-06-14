import React from "react";
import contacts from "./contacts.json";

import "./App.css";

const contactsCopy = contacts.slice();
const fiveContacts = contactsCopy.slice(0, 5);
const restContacts = contactsCopy.slice(6);

function App(props) {
  console.log(fiveContacts);
  const [contacts, setContacts] = React.useState(fiveContacts);
  const trophy = "🏆";

  function addContact(id) {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      {contacts.map(function (contact) {
        return (
          <table key={contact.id}>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Pop</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{trophy.repeat(contact.wonOscar)}</td>
                <td>{trophy.repeat(contact.wonEmmy)}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
