import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  let firstFive = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  return (
    <div className="App">
      <div className="App">
        <h1>Iron Contacts</h1>
        <div className="buttons">
          {/* <button onClick={randomCeleb}>Add Random Contact</button>
          <button onClick={sortAlpha}>Sort by Name</button>
          <button onClick={sortPopularity}>Sort by Popularity</button> */}
        </div>
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
          <tbody>
            {contacts.map((celebrity) => {
              return (
                <tr className="celebrityCard">
                  <td>
                    <img src={celebrity.pictureUrl} alt="" />
                  </td>
                  <td>{celebrity.name}</td>
                  <td>{celebrity.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
