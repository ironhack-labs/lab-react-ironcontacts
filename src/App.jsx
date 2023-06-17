import React from "react";
import "./App.css";
import contactsJson from "./contacts.json";

function App() {
  const [contacts, setContacts] = React.useState(contactsJson.slice(0, 5)); // contacts: [ {ïd: , ...}, {} ]

  function addRandomContact() {
    // Faire une copie
    const contactsCopy = contacts.slice();

    // filtrer la liste json en enlevant les contacts deja present dans le state contacts
    const filteredContacts = contactsJson.filter((contact) => {
      // return true si ce contact est absent du state

      const foundContact = contacts.find((el) => {
        if (el.id === contact.id) {
          return true;
          // return false si non
        } else {
          return false;
        }
      });

      if (foundContact) {
        return false;
      } else {
        return true;
      }
    });

    console.log("filteredContacts", filteredContacts);

    const randContactIndex = Math.floor(
      Math.random() * filteredContacts.length
    );

    // Ajouter le contact à la copie
    contactsCopy.push(filteredContacts[randContactIndex]);

    // maj le state
    setContacts(contactsCopy);
  }

  function sortByName() {
    // Faire une copie
    const contactsCopy = contacts.slice();

    contactsCopy.sort((celeb1, celeb2) => {
      if (celeb1.name < celeb2.name) {
        return -1;
      }
      if (celeb1.name < celeb2.name) {
        return 1;
      }
    });

    setContacts(contactsCopy);
  }

  function sortByPop() {
    // Faire une copie
    const contactsCopy = contacts.slice();

    contactsCopy.sort(
      (celeb1, celeb2) => celeb2.popularity - celeb1.popularity
    );

    setContacts(contactsCopy);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button
        onClick={function () {
          addRandomContact();
        }}
      >
        Add Random Contact
      </button>
      <button
        onClick={function () {
          sortByPop();
        }}
      >
        Sort by popularity
      </button>
      <button
        onClick={function () {
          sortByName();
        }}
      >
        Sort by name
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
            let oscar = "";
            if (contact.wonOscar) {
              oscar = "🏆";
            }
            let emmy = "";
            if (contact.wonEmmy) {
              emmy = "🏆";
            }
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{oscar}</td>
                <td>{emmy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
