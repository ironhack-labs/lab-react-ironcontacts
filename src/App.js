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
            <a href={`${contact.pictureUrl}`} target='_blank' rel='noreferrer'>
              <img
                src={contact.pictureUrl}
                style={{ width: "4vw" }}
                alt="contact"
              />
            </a>
          </td>
          <td>{contact.name}?</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>
            <button onClick={() => deleteName(i)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  function randomContact() {
    let copyOfRest = [...rest];
    let copyOfList = [...list];
    let randomContact =
      copyOfRest[Math.floor(Math.random() * copyOfRest.length)];
    copyOfList.push(randomContact);
    copyOfRest.splice(copyOfRest.indexOf(randomContact), 1);
    setList(copyOfList);
    setRest(copyOfRest);
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
    setList(nameList);
  }

  function deleteName(i) {
    let copyOfList = [...list];
    copyOfList.splice(i, 1);
    setList(copyOfList);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContact}> Add random contact</button>
      <button onClick={sortName}> Sort by name ▲</button>
      <button onClick={sortPopular}> Sort by popularity ▼</button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <table id="contacts">
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
