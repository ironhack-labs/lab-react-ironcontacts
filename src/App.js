import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";
import Contacts from "./components/Contacts";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));
  const createNew = () => {
    const newIndex = Math.floor(Math.random() * contacts.length);
    setContact((contact) => [contacts[newIndex], ...contact]);
  };
  const sortPopularity = () => {
    const sorted = contact.sort((a, b) => b.popularity - a.popularity);
    setContact([...sorted]);
  };
  const sortName = () => {
    const sorted = contact.sort((a, b) => a.name.localeCompare(b.name));
    setContact([...sorted]);
  };
  const deleteActor = (actorId) => {
    const filteredArr = contact.filter((e) => actorId !== e.id);
    setContact(filteredArr);
  };
  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <div className='buttons'>
        <button onClick={() => createNew()}>Add Random Contact</button>
        <button onClick={() => sortPopularity()}>Sort By Popularity</button>
        <button onClick={() => sortName()}>Sort By Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Contacts contact={contact} deleteActor={deleteActor} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
