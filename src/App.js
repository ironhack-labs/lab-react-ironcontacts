import "./App.css";
import { useState } from "react";
import contactsArr from "./contacts.json";

function App() {
  let fiveContacts = contactsArr.splice(0, 5);
  const remainingContacts = contactsArr.slice(6, contactsArr.length);
  const randomCeleb =
    remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
  const [contacts, setContacts] = useState(fiveContacts);

  const randomPicker = () => {
    const newList = [...contacts, randomCeleb];
    setContacts(newList);
  };

  const alphabeticallySort = () => {
    const updatedAlphaList = [
      ...contacts.sort((x, y) => x.name.localeCompare(y.name)),
    ];
    setContacts(updatedAlphaList);
  };

  const popularitySort = () => {
    const updatedPopuList = [
      ...contacts.sort((x, y) => {
        if (x.popularity > y.popularity) {
          return -1;
        } else if (x.popularity < y.popularity) {
          return 1;
        } else {
          return 0;
        }
      }),
    ];
    setContacts(updatedPopuList);
  };

  return (
    <div className="App">
      <button onClick={randomPicker}>Add Contact</button>
      <button onClick={alphabeticallySort}>Sort Alphabetically</button>
      <button onClick={popularitySort}>Sort Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((x) => {
          return (
            <tr>
              <td>
                <img src={x.pictureUrl} alt="" />
              </td>
              <td>{x.name}</td>
              <td>{x.popularity}</td>
              <td>{x.wonOscar ? "🏆" : ""}</td>
              <td>{x.wonEmmy ? "🏆" : ""}</td>
              <button>Delete</button>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;