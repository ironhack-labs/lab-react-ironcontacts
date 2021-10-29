import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

const firstFive = contacts.slice(0, 5);

function App() {
  const [initialState, setInitialState] = useState(firstFive);

  function addRandomContact() {
    const randomContactPosition = Math.floor(Math.random() * contacts.length);

    const randomContact = contacts[randomContactPosition];

    const copy = initialState.slice();
    // const copy = [...initialState]

    copy.unshift(randomContact);
    setInitialState(copy);
  }

  function sortByName() {
    const copy = [...initialState];

    copy.sort((a, b) => a.name.localeCompare(b.name));
    setInitialState(copy);
  }

  function sortByPop() {
    const copy = [...initialState];

    copy.sort((a, b) => b.popularity - a.popularity);
    setInitialState(copy);
  }

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPop}>Sort by popularity</button>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {initialState.map((celeb) => {
            return (
              <tr>
                <td>
                  <img
                    src={celeb.pictureUrl}
                    alt={`${celeb.name}`}
                    style={{ height: "100px" }}
                  />
                </td>
                <td>{celeb.name}</td>
                <td>{celeb.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
