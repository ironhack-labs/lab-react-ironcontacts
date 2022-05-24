import React, { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [allContacts, setAllContacts] = useState(contacts.slice(0, 5));

  const randomizeMovie = () => {
    const randomMovie = contacts[Math.floor(Math.random() * contacts.length)];
    setAllContacts([randomMovie, ...allContacts]);
  };

  const sortContactNames = () => {
    setAllContacts([
      ...allContacts.sort((a, b) => a.name.localeCompare(b.name)),
    ]);
  };

  const sortContactPopularity = () => {
    setAllContacts([
      ...allContacts.sort((a, b) => b.popularity - a.popularity),
    ]);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = allContacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setAllContacts(filteredContacts);
  };

  return (
    <div key={allContacts._id} className="App">
      <h1>IronContacts</h1>
      <button onClick={randomizeMovie}>Add Random Contact</button>
      <button onClick={sortContactNames}>Sort by name</button>
      <button onClick={sortContactPopularity}>Sort by popularity</button>
      <table className="contacts-table">
        <tr className="contacts-tr">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Action</th>
        </tr>
        {allContacts.map((el) => {
          return (
            <tr>
              <td className="contacts-tr">
                <img
                  className="celeb-pic"
                  src={el.pictureUrl}
                  alt="celeb-pic"
                />
              </td>
              <td>
                <p>{el.name}</p>
              </td>
              <td>
                <p>{Math.round(el.popularity)}</p>
              </td>
              {el.wonOscar ? (
                <td>
                  <p>🏆</p>
                </td>
              ) : (
                ""
              )}
              {el.wonEmmy ? (
                <td>
                  <p>🏆</p>
                </td>
              ) : (
                ""
              )}
              <td>
                <button onClick={() => deleteContact(el.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
