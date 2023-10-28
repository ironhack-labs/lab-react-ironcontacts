import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json"

function App() {

  const [contacts, setContacts] = useState(contactsData)

  const firstFive = contacts.slice(0, 5);

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        {firstFive.map(person => (
          <tbody key={person.id}>
            <tr key={person.id}>
              <td>{person.picture}</td>
              <td>{person.name}</td>
              <td>{person.popularity}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
