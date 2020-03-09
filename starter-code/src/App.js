import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Item } from "./components/item";
import contacts from "./contacts.json";
import { Title } from "./components/title";

const n = 5;
const data = contacts.splice(0, n);

export const App = () => {
  const [displayedContacts, setState] = useState(data);

  const addRandom = () => {
    const newContacts = [...displayedContacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // never choose a contact that is rendered
    /* this is to never set a contact that is displayed without modifiyng the array
    do {
      randomContact = contacts[Math.floor(Math.random() * contacts.length)];
      console.log("do");
    } while (newContacts.indexOf(randomContact) > -1);
    */
    contacts.splice(contacts.indexOf(randomContact), 1); // this is another aproach but changing the contacts array
    newContacts.push(randomContact);
    setState(newContacts);
  };

  const sortName = () => {
    const newContacts = [...displayedContacts];
    newContacts.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    setState(newContacts);
  };

  const sortPopularity = () => {
    const newContacts = [...displayedContacts];
    newContacts.sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });
    setState(newContacts);
  };

  const handleDelete = index => {
    const newContacts = [...displayedContacts];
    newContacts.splice(index, 1);
    setState(newContacts);
  };

  return (
    <div>
      <button onClick={() => addRandom()}>Add a random contact</button>
      <button onClick={() => sortName()}>Sort by name</button>
      <button onClick={() => sortPopularity()}>Sort by popularity</button>
      <Title />
      {displayedContacts.map((e, i) => (
        <Item
          key={e.id}
          name={e.name}
          pictureUrl={e.pictureUrl}
          popularity={e.popularity}
          setDelete={index => handleDelete(index)}
          index={i}
        ></Item>
      ))}
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
