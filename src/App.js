import { useState } from "react";
import "./App.css";
import contactsFromJson from "./contacts.json";

function App() {
  let firstFive = contactsFromJson.slice(0, 5);

  const [contacts, setContacts] = useState(firstFive);

  console.log(firstFive);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button>Add Random Contact</button>
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
          
          {contacts.map((contactElem) => {
            return (
              <tr key={contactElem.id}>
                <td><img src={contactElem.pictureUrl} alt="" height="100"/></td>
                <td>{contactElem.name}</td>
                <td>{Math.round(contactElem.popularity * 100) / 100}</td>
                <td>{contactElem.wonOscar ? '🏆' : null}</td>
                <td>{contactElem.womEmmy ? '🏆' : null}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );
}

export default App;
