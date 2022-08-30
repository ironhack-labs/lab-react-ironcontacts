// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

function App() {
  const firstFive = allContacts.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  const addRandContact = () => {
    let n = Math.floor(Math.random() * allContacts.length);
    setContacts([...contacts, allContacts[n]]);
  };

  const sortContactsByName = () => {
    let [sortedArr] = contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    setContacts([...contacts, sortedArr]);
  };

  const sortContactsByPopularity = () => {
    let sortedArr = contacts.sort((a, b) =>
      a.popularity > b.popularity ? 1 : -1
    );
    setContacts([...contacts, sortedArr]);
  };

  const removeFromArr = (id) => {
    let filteredArr = contacts.filter((el) => el.id !== id.id);
    setContacts(filteredArr);
    console.log("prout");
  };

  return (
    <div className="App">
      <button onClick={addRandContact}>Add Random Contact</button>
      <button onClick={sortContactsByName}>Sort Contacts By Name</button>
      <button onClick={sortContactsByPopularity}>
        Sort Contacts By Popularity
      </button>
      {contacts.map(
        ({ id, pictureUrl, name, popularity, wonEmmy, wonOscar }, i) => {
          return [
            <div key={i}>{name}</div>,
            <img src={pictureUrl} alt={name}></img>,
            <div>{popularity}</div>,
            <div>{{ wonEmmy } === true ? "🏆" : "no"}</div>,
            <div>{{ wonOscar } === true ? "🏆" : "no"}</div>,
            <button onClick={() => removeFromArr({ id })}>Remove {id}</button>,
          ];
        }
      )}
    </div>
  );
}

export default App;
