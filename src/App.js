import "./App.css";
import allContactArr from "./contacts.json";
import { useState } from "react";

function App() {
  /*Iteración 1*/

  const [contact, setContact] = useState(allContactArr.slice(0, 5));
  /*const copy = contact.map((eachElement) => eachElement);*/

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contact.map((eachElement) => {
          return (
            <tbody key={eachElement.id}>
              <tr>
                <td>
                  <img
                    src={eachElement.pictureUrl}
                    alt="pictureUrl"
                    width="50px"
                  />
                </td>
                <td>{eachElement.name}</td>
                <td>{eachElement.popularity.toFixed(2)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
