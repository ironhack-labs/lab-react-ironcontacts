import React from "react";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  let remainingContacts = [...contacts.slice(5)];
  console.log(remainingContacts);

  let initialContacts = contacts.slice(0, 5);

  const [showedContacts, setShowedContacts] = useState(initialContacts);

  const [possibleContacts, setPossibleContacts] = useState(remainingContacts);

  const addContact = () => {
    if (possibleContacts.length === 0) {
      return;
    }
    const newContactIndex = Math.floor(Math.random() * possibleContacts.length);
    const newContact = possibleContacts[newContactIndex];

    const possibleContactsCopy = [...possibleContacts];
    possibleContactsCopy.splice(newContactIndex, 1);
    setPossibleContacts(possibleContactsCopy);

    setShowedContacts([...showedContacts, newContact]);
  };

  const sortAlphabetically = () => {
    const showedContactsCopy = [...showedContacts];
    const sortedContacts = showedContactsCopy.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return setShowedContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const showedContactsCopy = [...showedContacts];
    const sortedContacts = showedContactsCopy.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    return setShowedContacts(sortedContacts);
  };

  const deleteContact = (idToDelete) => {
    const showedContactsCopy = [...showedContacts];
    return setShowedContacts(
      showedContactsCopy.filter(({ id }) => id !== idToDelete)
    );
  };

  return (
    <div className="App">
      <button onClick={addContact}>Add a Contact</button>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table>
        <tr key="Header" className="header">
          <th key="Picture">Picture</th>
          <th key="Name">Name</th>
          <th key="Popularity">Popularity</th>
          <th key="WonOscar">Won Oscar</th>
          <th key="WonEmmy">Won Emmy</th>
        </tr>
        {showedContacts.map((contacts) => {
          return (
            <>
              <tr key={contacts.id}>
                <td key={contacts.pictureUrl}>
                  <img
                    src={contacts.pictureUrl}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                    alt={contacts.name}></img>
                </td>
                <td key={contacts.name}>{contacts.name}</td>
                <td key={contacts.popularity.toFixed(1)}>{contacts.popularity.toFixed(1)}</td>
                <td key={Math.random()}>
                  {contacts.wonOscar ? (
                      <td>
                      {contacts.wonOscar ? (
                        <span role="img" aria-label="trophy">
                          🏆
                        </span>
                      ) : null}
                    </td>
                  ) : null}
                </td>

                <td key={Math.random()}>
                  {contacts.wonEmmy ? (
                   <td>
                   {contacts.wonEmmy ? (
                     <span role="img" aria-label="trophy">
                       🏆
                     </span>
                   ) : null}
                 </td>
                  ) : null}
                </td>
                <td>
                  <button
                    onClick={(event) => {
                      deleteContact(contacts.id);
                    }}>
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default App;


