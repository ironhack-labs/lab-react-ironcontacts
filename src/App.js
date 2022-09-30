import logo from "./logo.svg";
import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0, 5));

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>
              <h2>Picture</h2>
            </td>
            <td>
              <h2>Name</h2>
            </td>
            <td>
              <h2>Popularity</h2>
            </td>
            <td>
              <h2>
                Won <br /> Oscar
              </h2>
            </td>
            <td>
              <h2>
                Won <br /> Emmy
              </h2>
            </td>
            <td>
              <h2>Actions</h2>
            </td>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  {Math.round((contact.popularity + Number.EPSILON) * 100) /
                    100}
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
