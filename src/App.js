import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={contactsArr[0].pictureUrl} alt="Contact" />
            </td>
            <td>{contactsArr[0].name}</td>
            <td>{contactsArr[0].popularity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
