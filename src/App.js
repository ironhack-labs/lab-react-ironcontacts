import "./App.css";
import contactsFromJSON from "./contacts.json";
import { useState } from "react";

function App() {

  //iteration 1

  const [contacts, setContacts] = useState(contactsFromJSON);

  const firstFive = contacts.slice(0, 5);

  //iteration 3

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    firstFive.push(randomContact);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={() => {
          setContacts(addRandom);
        }}
      >
        Add Random Contact
      </button>
      {firstFive.map((contactObj) => {
        return (
          <table key={contactObj.id}>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
            <tr>
              <td>{contactObj.pictureUrl}</td>
              <td>{contactObj.name}</td>
              <td>{contactObj.popularity}</td>
              <td>{contactObj.wonOscar === true && <p>🏆</p>}</td>
              <td>{contactObj.wonEmmy === true && <p>🏆</p>}</td>
            </tr>
          </table>
        );
      })}
      ;
    </div>
  );
}

export default App;
