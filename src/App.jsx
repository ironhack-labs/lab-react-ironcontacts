import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [firstFiveContacts, setfirstFiveContacts] = useState(
    contacts.slice(0, 5)
  );
  console.log(firstFiveContacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Add Random Contact
      </button>

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
          {firstFiveContacts.map((contacts) => {
            return (
              <tr key={contacts.id}>
                <td>
                  <img
                    src={contacts.pictureUrl}
                    style={{ width: "auto", height: "100px" }}
                  />
                </td>
                <td>{contacts.name}</td>
                <td>{Math.round(contacts.popularity * 100) / 100}</td>
                <td>{contacts.wonOscar ? "🏆" : ""}</td>
                <td>{contacts.wonEmmy ? "🌟" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
