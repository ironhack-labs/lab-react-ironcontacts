import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 8));
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img
                    style={{ height: "80px" }}
                    src={contact.pictureUrl}
                  ></img>
                </td>
                <td> {contact.name}</td>
                <td> {contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
