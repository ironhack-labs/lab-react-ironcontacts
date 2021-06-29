import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  let [list, setList] = useState(contacts.splice(0, 5));
  let [rest, setRest] = useState(contacts);

  function fillTable() {
    return list.map((contact, i) => {
      //console.log(contact);
      return (
        <tr key={i}>
          <td>
            <img
              src={contact.pictureUrl}
              style={{ width: "6vw" }}
              alt="contact"
            ></img>
          </td>
          <td>{contact.name}?</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button >Delete</button></td>
        </tr>
      );
    });
  }

  function randomContact() {
    let newRest = [...rest];
    let newList = [...list];
    let newContact = newRest[Math.floor(Math.random() * newRest.length)];
    newList.push(newContact);
    newRest.splice(newRest.indexOf(newContact), 1);
    setList(newList);
    setRest(newRest);
  }

  function sortPopular() {
    let popularList = [...list];
    popularList.sort((a, b) => b.popularity - a.popularity);
    setList(popularList);
  }

  function sortName() {
    let nameList = [...list];
    nameList.sort(function (a, b) {
      if (a.name < b.name) {
          return -1;
      }
      if (b.name < a.name) {
          return 1;
      }
      return 0;
  });
    setList(nameList)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContact}> Add random contact</button>
      <button onClick={sortName}> Sort by name ▲</button>
      <button onClick={sortPopular}> Sort by popularity ▼</button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{fillTable()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
