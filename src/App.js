import React, { useState, useEffect } from 'react';
import './App.css';

import contacts from './contacts.json';
import ActorCard from './components/ActorCard/ActorCard';

function App() {
  const [actors, setActors] = useState(contacts.filter((actor, index) => index < 5));

  const randomContact = () => {
    const indexRandom = Math.floor(Math.random() * contacts.length);
    setActors([...actors, contacts[indexRandom]]);
  };

  const sortByName = () => {
    setActors([...actors.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })])
  };

  const sortByPopularity = () => {
    setActors([...actors.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    })])
  };

  const deleteContact = (name) => {
    setActors([...actors.filter(actor => actor.name !== name)])
  }

  return (
    <div className="App">
      <h1>IRONCONTACTS</h1>
      <button onClick={() => randomContact()}>Random contacts</button>
      <button onClick={() => sortByName()}>Sort by name</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor, index) => (
            <tr key={index} >
              <ActorCard {...actor} />
              <td>
              <button  onClick={() => deleteContact(actor.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
