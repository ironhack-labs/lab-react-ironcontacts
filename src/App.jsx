import React from "react";
import contacts from "./contacts.json";

import "./App.css";

const contactsCopy = contacts.slice();
const fiveContacts = contactsCopy.slice(0, 5);

function App(props) {
  console.log(fiveContacts);
  const [contactList, setContacts] = React.useState(fiveContacts);
  const trophy = "🏆";

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button
        onClick={function () {
          console.log("je fonctionne");

          // 1. tirer au sort un contact (qui n'est pas deja dans les `contacts`)

          // creer une liste qui contient seulement les contacts non-presents dans le state
          const filteredContacts = contacts.filter(
            (contact) => !contactList.find((c) => c.id === contact.id)
          );
          console.log("filteredContacts", filteredContacts); // 47

          const randomContact =
            filteredContacts[
              Math.floor(Math.random() * filteredContacts.length)
            ];

          // 2. maj le state (setContacts) a un tableau de 6 contacts
          setContacts([...fiveContacts, randomContact]);
        }}
      >
        Add random contact
      </button>
      {contactList.map(function (contact) {
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
