import React from "react";
import "./App.css";
import Contacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = React.useState(Contacts.slice(0, 5));

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
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
          {contacts.map((contact) => {
            let oscar = "";
            if (contact.wonOscar) {
              oscar = "🏆";
            }
            let emmy = "";
            if (contact.wonEmmy) {
              emmy = "🏆";
            }
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{oscar}</td>
                <td>{emmy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
