import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const maxContacts = contacts.slice(0, 5);
  const [movieContact, setMovieContact] = useState(maxContacts);
  const contactsCopy = [...contacts];
  console.log(maxContacts);

  const getRandomActor = () => {
    const randomActor = Math.floor(Math.random() * contactsCopy.length);
    const newContact = contactsCopy.splice(randomActor, 1);
    const updatedContacts = [...movieContact, ...newContact];
    setMovieContact(updatedContacts);
  };

  const sortActors = () => {
    const sortedActors = [...movieContact].sort((a, b) => {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });
    setMovieContact(sortedActors);
  };

  const sortActorPopularity = () => {
    const sortedPopularity = [...movieContact].sort((a, b) => {
      return a.popularity < b.popularity ? 1 : -1;
    });
    setMovieContact(sortedPopularity);
  };

  const deleteActor = (id) => {
    const newActor = movieContact.filter((contact) => contact.id !== id);
    setMovieContact(newActor);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={getRandomActor}>Add Random Contact</button>
      <button onClick={sortActorPopularity}>Sort by Popularity</button>
      <button onClick={sortActors}>Sort by name</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {movieContact.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img
                    src={actor.pictureUrl}
                    alt="actor-img"
                    className="actor-img"
                  />
                </td>
                <td>{actor.name}</td>
                <td> {Number(actor.popularity).toFixed(2)}</td>
                {actor.wonEmmy ? <td>🏆</td> : ""}
                {actor.wonOscar ? <td>⭐️</td> : ""}
                <td>
                  <button onClick={() => deleteActor(actor.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
