import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactRow from "./ContactRow";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="buttons">
        <button>Add Random Contact</button>
        <button>Sort by Name</button>
        <button>Sort by Popularity</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact._id}
                contact={contact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
