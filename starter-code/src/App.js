import React, { useState } from "react";
//import logo from "./logo.svg";
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

  return (
    <div>
      <button onClick={() => addRandom()}>Add a random contact</button>
      <button onClick={() => sortName()}>Sort by name</button>
      <button onClick={() => sortPopularity()}>Sort by popularity</button>
      <Title />
      {displayedContacts.map(e => (
        <Item
          key={e.id}
          name={e.name}
          pictureUrl={e.pictureUrl}
          popularity={e.popularity}
        ></Item>
      ))}
    </div>
  );
};

export default App;
