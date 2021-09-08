import contacts from "./contacts.json";
import { useState } from "react";
import "./App.css";

let actors = contacts.slice(0, 5);

console.log(actors[0].pictureUrl);

const ShowTable = () => {
  let list = actors.map((actor, i) => {
    return (
      <tr>
        <td>
          <img src={actor.pictureUrl} alt="profile pic" height="70px" />
        </td>
        <td>{actor.name}</td>
        <td>{actor.popularity.toFixed(2)}</td>
      </tr>
    );
  });
  return list;
};

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <ShowTable />
      </table>
    </div>
  );
}

export default App;
