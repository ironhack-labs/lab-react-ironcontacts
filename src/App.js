import "./App.css";
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

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
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr key={contacts.id} className="table">
                <td>
                  <img src={contacts.pictureUrl} alt={contacts.name} />
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
                <td>{contacts.wonOscar ? "🏆" : ""}</td>
                <td>{contacts.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
