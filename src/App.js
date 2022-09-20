import { useState } from "react";

import "./App.css";

import contacts from "./contacts.json";

function DeleteButton({ id, actors, setActors }) {
  function deleteItem() {
    setActors([...actors.filter((actor) => actor.id !== id)]);
  }

  return <button onClick={() => deleteItem()}>Delete</button>;
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
      <td>{wonOscar ? "🏆" : ""}</td>
      <td>{wonEmmy ? "✨" : ""}</td>
      <td>
        <DeleteButton id={id} actors={actors} setActors={setActors} />
      </td>
    </tr>
  );
}

function ContactTable() {
  const [actors, setActors] = useState(contacts.slice(0, 5));

  function addRandomActor() {
    const randomActor = contacts.filter((item) => {
      return !actors.includes(item);
    });
    const newActor =
      randomActor[Math.floor(Math.random() * randomActor.length)];

    setActors([newActor, ...actors]);
  }

  function sortByName() {
    const sorted = actors.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setActors([...sorted]);
  }
  function sortByPopularity() {
    const sorted = actors.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setActors([...sorted]);
  }

  return (
    <>
      <button onClick={() => addRandomActor()}>Give me MOOOORE</button>
      <button onClick={() => sortByName()}>Sort By Name</button>
      <button onClick={() => sortByPopularity()}>Sort By Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Popularity</th>
            <th>Name</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
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
      <ContactTable />
    </div>
  );
}

export default App;
