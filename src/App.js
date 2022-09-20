import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const maxContacts = contacts.slice(0, 5);
  const [movieContact, setMovieContact] = useState(maxContacts);
  console.log(maxContacts);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
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
                <td>{actor.popularity}</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>
              <img src={movieContact[0].pictureUrl} alt="actor-img" />
            </td>
            <td>Math Damon</td>
            <td>9.50</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
