import "./App.css";
import contactsFromJSON from "./contacts.json";
import { useState } from "react";

function App() {
  //iteration 1

  const [contacts, setContacts] = useState(contactsFromJSON.slice(0, 5));

  // const contacts = contacts;

  //iteration 3

  const addRandom = () => {
    const arrCopy = [...contacts];
    const randomIndex = Math.floor(Math.random() * contactsFromJSON.length);
    const randomContact = contactsFromJSON[randomIndex];
    arrCopy.push(randomContact);
    setContacts(arrCopy);
  };

  //iteration 5

  const deleteContact = (contactObj) => {
    const arrCopy = [...contacts];
    const newArr = arrCopy.filter((actor) => {
      return actor.id !== contactObj;
    });
    setContacts(newArr);
  }

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
          const arrCopy = [...contacts];
          arrCopy.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          });
          return arrCopy;
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          const arrCopy = [...contacts];
          let sortedByPop = Object.keys(arrCopy).sort(function (a, b) {
            return arrCopy[a] - arrCopy[b];
          });
          return arrCopy;
        }}
      >
        Sort by Popularity
      </button>
      {contactsFromJSON.map((contactObj) => {
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
              <td>
                <button
                  onClick={() => {deleteContact(contactObj)}}
                >
                  Delete
                </button>
              </td>
            </tr>
          </table>
        );
      })}
      ;
    </div>
  );
}

export default App;
