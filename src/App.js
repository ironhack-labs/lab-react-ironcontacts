import "./App.css";
import React from "react";
import { useState } from "react";
import contacts from "../src/contacts.json";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));

  const randomContacts = () => {
    let random = contacts[Math.floor(Math.random() * contacts.length)];
    setContact([random, ...contact]);
  };

  const sortNameContacts = () => {
    let sortedName = [
      ...contact.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    ];
    setContact(sortedName);
  };

  const sortPopularity = () => {
    let sortedPop = [
      ...contact.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      }),
    ];
    setContact(sortedPop);
  };

  const deleteActor = (id) => {
    const filteredActors = contact.filter((contact) => {
      return contact.id !== id;
    });
    // update the state with the new array of movies:
    setContact(filteredActors);
  };

  return (
    <div className="App">
      <h1>IronContatcs</h1>
      <div className="buttons">
        <button className="btn" onClick={() => randomContacts()}>
          Add Random Contact
        </button>
        <button className="btn" onClick={() => sortPopularity()}>
          Sort by popularity
        </button>
        <button className="btn" onClick={() => sortNameContacts()}>
          Sort by name
        </button>
      </div>
      <table className="table">
        <tr>
          <th className="tbl-title">Picture </th>
          <th className="tbl-title">Name </th>
          <th className="tbl-title">Popularity </th>
          <th className="tbl-title">WonOscar </th>
          <th className="tbl-title">WonEmmy </th>
        </tr>
        {contact.map((element) => {
          return (
            <tr className="actors">
              <td>
                <img className="img" src={element.pictureUrl} alt="pic" />
              </td>
              <td> {element.name} </td>
              <td> {element.popularity.toFixed(2)}</td>
              <td> {element.wonOscar ? <p>🏆</p> : <p> </p>} </td>
              <td> {element.wonEmmy ? <p>🏆</p> : <p> </p>} </td>
              <td>
                <button className="btn" onClick={() => deleteActor(element.id)}>
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
