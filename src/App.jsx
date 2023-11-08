import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const firstFiveActors = contacts.slice(0, 5);
  const [displayContacts, setDisplayContacts] = useState(firstFiveActors);

  return (
    <div>
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
          {displayContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                {contact.wonOscar ? (
                  <span role="img" aria-label="Trophy">
                    🏆
                  </span>
                ) : null}
              </td>
              <td>
                {contact.wonEmmy ? (
                  <span role="img" aria-label="Star">
                    🌟
                  </span>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
