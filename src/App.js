import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  let [actors, setActors] = useState(contacts.slice(0, 5));

  function randomContact() {
    let randomNumber = Math.floor(Math.random() * (contacts.length - 1));
    let newContact = contacts[randomNumber];
    contacts.splice(randomNumber, 1);

    let copyOfActors = [...actors];
    copyOfActors.push(newContact);
    setActors(copyOfActors);
  }

  const ShowTable = () => {
    let list = actors.map((actor) => {
      return (
        <tr>
          <td>
            <img src={actor.pictureUrl} height="50px" />
          </td>
          <td>{actor.name}</td>
          <td>{actor.popularity}</td>
        </tr>
      );
    });
    return list;
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContact}> Add Random Contact</button>
      <table>
        <tr>
          <th>picutre</th>
          <th>name</th>
          <th>popularity</th>
        </tr>
        <ShowTable />
      </table>
    </div>
  );
}

export default App;
