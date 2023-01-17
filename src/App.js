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
      <button
        onClick={() => {
          firstFive.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          });
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          let sortedByPop = Object.keys(firstFive).sort(function (a, b) {
            return firstFive[a] - firstFive[b];
          })
        }}
      >
        Sort by Popularity
      </button>
      {firstFive.map((contactObj) => {
        return (
          <table key={contactObj.id} className="table">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
            <tr>
              <td>
                <img src={contactObj.pictureUrl} />
              </td>
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
