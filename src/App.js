import "./App.css";
import { useState } from "react";
import fullContactsList from "./contacts.json";

function App() {
  let firstFive = fullContactsList.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button>Get random contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>
            Won <br /> Oscar
          </th>
          <th>
            Won <br /> Emmy
          </th>
        </tr>
        {contacts.map((contact) => (
          <tr id={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt="image of celeb"></img>
            </td>
            <td>
              <p>{contact.name}</p>
            </td>
            <td>
              <p>{contact.popularity}</p>
            </td>
            <td>{contact.wonOscar ? "🏆" : false}</td>
            <td>{contact.wonEmmy ? "🏆" : false}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
