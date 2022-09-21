import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const maxContacts = contacts.slice(0, 5);
  const [movieContact, setMovieContact] = useState(maxContacts);
  const contactsCopy = [...contacts];
  console.log(maxContacts);

  // const randomActor = contacts[Math.floor(Math.random() * contacts.length)];
  const getRandomActor = () => {
    const randomActor = Math.floor(Math.random() * contactsCopy.length);
    const newContact = contactsCopy.splice(randomActor, 1);
    const updatedContacts = [...movieContact, ...newContact];
    setMovieContact(updatedContacts);
  };

  console.log("Random Actor:", contacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        // onClick={() => {
        //   setMovieContact([...movieContact, getRandomActor(contacts)]);
        // }}
        onClick={getRandomActor}
      >
        Add Random Contact
      </button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
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
                {actor.wonOscar ? <td>🏆</td> : ""}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
