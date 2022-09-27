import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function DeleteActor({ id, actors, setActors }) {
  function deleteListing() {
    setActors([...actors.filter((actor) => actor.id !== id)]);
  }

  return <button onClick={() => deleteListing()}>Delete from List</button>;
}

function Contact({
  pictureUrl,
  name,
  popularity,
  wonOscar,
  wonEmmy,
  id,
  actors,
  setActors,
}) {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{wonOscar ? "🏆" : "Nope"}</td>
      <td>{wonEmmy ? "🎉" : "Nope"}</td>
      <td>
        <DeleteActor id={id} actors={actors} setActors={setActors} />
      </td>
    </tr>
  );
}

function Contacts() {
  const [actors, setActors] = useState(contacts.slice(0, 5));

  function addRandom() {
    const randomActor = contacts.filter((listing) => {
      return !actors.includes(listing);
    });
    const newPerson =
      randomActor[Math.floor(Math.random() * randomActor.length)];

    setActors([newPerson, ...actors]);
  }

  function sortListByName() {
    const sorted = actors.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setActors([...sorted]);
  }
  function sortListByPopularity() {
    const sortedOutList = actors.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setActors([...sortedOutList]);
  }

  return (
    <>
      <button onClick={() => addRandom()}>Add random contact</button>
      <button onClick={() => sortListByName()}>Sort List by name</button>
      <button onClick={() => sortListByPopularity()}>Sort by popularity</button>
      <table className="main">
        <thead className="title">
          <tr>
            <th>Picture</th>
            <th>Popularity</th>
            <th>Name</th>
            <th>Won Oscar?</th>
            <th>Won Emmy?</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => {
            return (
              <Contact
                {...actor}
                key={actor.id}
                actors={actors}
                setActors={setActors}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Contacts />
    </div>
  );
}

export default App;

