import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contact, setContact] = useState(contacts);

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <th scope="row">
                  <img src={contact.pictureUrl} alt="pic" />
                </th>
                <td colspan="2">{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
