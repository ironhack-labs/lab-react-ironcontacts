import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Item from "./components/item";
import Title from "./components/titleOfContacts";

const NumberOfContacts = 5;

const Contacts = contacts.slice(0, NumberOfContacts);

const App = () => {
  const [displayedContacts, setState] = useState(Contacts);

  const random = () => {
    const newContact = [...displayedContacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    if (newContact.includes(randomContact) !== true) {
      newContact.push(randomContact);
      setState(newContact);
    }
  };
  const sortName = () => {
    const newContact = [...displayedContacts];
    newContact.sort((a, b) => a.name.localeCompare(b.name));
    setState(newContact);
  };

  const sortPopularity = () => {
    const newContact = [...displayedContacts];
    newContact.sort((a, b) => a.popularity - b.popularity);
    setState(newContact);
  };

  const deleteContact = id => {
    let newContact = [...displayedContacts];
    newContact = newContact.filter(contact => id !== contact.id);
    setState(newContact);
  };

  return (
    <div>
      <h1>IronContacts</h1>
      <div className="container">
        <button onClick={() => random()}>Add Random Contact</button>
        <button onClick={() => sortName()}>Sort By Name</button>
        <button onClick={() => sortPopularity()}>Sort By Popularity</button>
      </div>
      <Title />
      {displayedContacts.map((e, index) => (
        <Item
          key={index}
          name={e.name}
          pictureUrl={e.pictureUrl}
          popularity={e.popularity.toFixed(2)}
          deleteOne={id => deleteContact(e.id)}
        />
      ))}
    </div>
  );
};

export default App;
