import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const firstFiveCelebrities = contactsData.slice(0, 5);
  const restOfCelebrities = contactsData.slice(5);

  const [celebrities, setCelebrities] = useState(firstFiveCelebrities);

  function getRandomCelebrity() {
    const randomNumber = Math.floor(Math.random() * restOfCelebrities.length);
    setCelebrities([...celebrities, restOfCelebrities[randomNumber]]);
  }

  function sortByPopularity() {
    const sortedArray = [...celebrities].sort((a, b) => b.popularity - a.popularity);
    setCelebrities(sortedArray);
    console.log(celebrities)
  }


  function sortByName() {
    const sortedArray = [...celebrities].sort((a, b) => a.name.localeCompare(b.name));
    setCelebrities(sortedArray);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={getRandomCelebrity} className="random-btn">
        Add random contact
      </button>
      <button onClick={sortByPopularity}>Sorty by popularity</button>
      <button onClick={sortByName}>Sorty by name</button>
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
          {celebrities.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  className="celebrity-img"
                  src={contact.pictureUrl}
                  alt={`${contact.name}-image`}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
