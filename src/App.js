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
      <div className="buttons">
        <button className="button" onClick={randomizeMovie}>
          Add Random Contact
        </button>
        <button className="button" onClick={sortContactNames}>
          Sort by name
        </button>
        <button className="button" onClick={sortContactPopularity}>
          Sort by popularity
        </button>
      </div>
      <table className="contacts-table">
        <tr className="contacts-tr">
          <th className="th">Picture</th>
          <th className="th">Name</th>
          <th className="th">Popularity</th>
          <th className="th">Won Oscar</th>
          <th className="th">Won Emmy</th>
          <th className="th">Action</th>
        </tr>
        {allContacts.map((el) => {
          return (
            <tr className="contacts-tr">
              <td className="td">
                <img
                  className="celeb-pic"
                  src={el.pictureUrl}
                  alt="celeb-pic"
                />
              </td>
              <td className="td">
                <p>{el.name}</p>
              </td>
              <td className="td">
                <p>{Math.round(el.popularity)}</p>
              </td>
              {el.wonOscar ? (
                <td className="td">
                  <p>🏆</p>
                </td>
              ) : (
                <td className="td">
                  <p> </p>
                </td>
              )}
              {el.wonEmmy ? (
                <td className="td">
                  <p>🏆</p>
                </td>
              ) : (
                <td className="td">
                  <p> </p>
                </td>
              )}
              <td className="td">
                <button className="button" onClick={() => deleteContact(el.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
