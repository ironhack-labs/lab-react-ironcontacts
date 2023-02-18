import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsData, setContacts] = useState(contacts.slice(0, 5));
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="table">
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {contactsData.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
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
