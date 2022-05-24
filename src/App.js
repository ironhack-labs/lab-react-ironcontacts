import "./App.css";
import contacts from "../src/contacts.json";
import React, { useState } from "react";

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

  const addRandom = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    setContactsList([random, ...contactsList]);
  };

  const sortName = () => {
    const sortN = [...contactsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactsList(sortN);
  };

  const sortPop = () => {
    const sortP = [...contactsList].sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    setContactsList(sortP);
  };

  const deleteActor = (actorId) => {
    const filteredActors = contactsList.filter((actor) => {
      return actor.id !== actorId;
    });
    setContactsList(filteredActors);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div className="buttons-div">
        <button onClick={() => addRandom()}>Add Actor</button>
        <button onClick={() => sortName()}>Sort Alphabetically</button>
        <button onClick={() => sortPop()}>Sort Popularity</button>
      </div>
      <table id="actors">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Action</th>
        </tr>
        {contactsList.map((el) => {
          return (
            <tr>
              <td className="imgTD">
                <img className="img" src={el.pictureUrl} alt="pictures" />
              </td>
              <td>{el.name}</td>
              <td>{el.popularity}</td>
              {el.wonOscar ? <td>Oscar Won🏆</td> : <td>No Oscars</td>}
              {el.wonEmmy ? <td>Emmy Won 🏆</td> : <td>No Emmys</td>}
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteActor(el.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
