import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 20));

  const getRandomContact = () => {
    if (contacts.length >= contactsData.length) {
      alert("You have added all your actors!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * contactsData.length);

    const selectedContact = contactsData[randomIndex];
    if (!contacts.some((contact) => contact.id === selectedContact.id)) {
      setContacts([...contacts, selectedContact]);
    } else {
      getRandomContact();
    }
  };

  const renderTrophy = (won) => {
    if (won) {
      return (
        <span role="img" aria-label="Trophy">
          🏆
        </span>
      );
    }
    return null;
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  const removeContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <h2>The only Actor database you will ever need</h2>
      <div className="buttonTop">
        <button className="button" onClick={getRandomContact}>
          Let's Add a Random Actor!
        </button>
        <button onClick={sortByName}>Let's Sort by Name!</button>
        <button onClick={sortByPopularity}>Let's Sort by Popularity!</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>PICTURE</th>
              <th>NAME</th>
              <th>POPULARITY</th>
              <th> WON AN OSCAR </th>
              <th> WON AN EMMY </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((oneContact) => {
              return (
                <tr className="table-row" key={oneContact.id}>
                  <td>
                    <img
                      src={oneContact.pictureUrl}
                      alt={oneContact.name}
                      className="contact-image"
                    />
                  </td>
                  <td>{oneContact.name}</td>
                  <td>{oneContact.popularity}</td>
                  <td>
                    {oneContact.wonOscar ? (
                      <span
                        className="trophyStyle"
                        role="img"
                        aria-label="Trophy"
                      >
                        🏆
                      </span>
                    ) : null}
                  </td>
                  <td>
                    {oneContact.wonEmmy ? (
                      <span
                        className="trophyStyle"
                        role="img"
                        aria-label="Trophy"
                      >
                        🏆
                      </span>
                    ) : null}
                  </td>
                  <td>
                    <button onClick={() => removeContact(oneContact.id)}>
                      Delete
                    </button>
                  </td>
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
