import React from "react";
import logo from "./logo.svg";
import contacts from "./contacts.json";
import "./App.css";

let firstFive = contacts.slice(0, 5);

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {firstFive.map((person, index) => {
          return (
            <tr>
              <td>
                <img src={person.pictureUrl}></img>
              </td>
              <td>{person.name}</td>
              <td>{person.popularity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
