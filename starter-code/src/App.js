import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Item } from "./components/item";
import contacts from "./contacts.json";
import { Title } from "./components/title";

export const App = () => {
  const n = 5;
  const displayedContacts = contacts.splice(0, n);

  return (
    <div>
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
