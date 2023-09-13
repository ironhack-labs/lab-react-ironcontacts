import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {

  const contactsToDisplay = contacts.slice(0, 5);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => {addRandContact(movieObj.id)}}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contactObj) => {
            return (
              <tr key={contactObj.id}>
                <td><img className="picture" src={contactObj.pictureUrl} alt={contactObj.name} /></td>
                <td>{contactObj.name}</td>
                <td>{contactObj.popularity.toFixed(2)}</td>
                <td>{contactObj.wonOscar && "🏆"}</td>
                <td>{contactObj.wonEmmy && "🏆"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
