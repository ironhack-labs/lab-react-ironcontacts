import { useState } from "react";
import "./App.css";
import contactsJson from "./contacts.json";

function App() {
  const slicedArray = contactsJson.slice(0, 5);

  const [arrayWithRandom, setArrayWithRandom] = useState(slicedArray);

  const addRandomContact = () => {
    const item = contactsJson[Math.floor(Math.random() * contactsJson.length)];

    const newArray = [...slicedArray];
    newArray.push(item);
    setArrayWithRandom(newArray);
  };

  const sortByName = () => {
    const sortedNames = [...arrayWithRandom].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setArrayWithRandom(sortedNames);
  };

  const sortByPopularity = () => {
    const sortedPopularity = [...arrayWithRandom].sort(
      (a, b) => b.popularity - a.popularity
    );
    setArrayWithRandom(sortedPopularity);
  };

  const deleteContact = (id) => {
    console.log("hit delete id", id);
    const newList = arrayWithRandom.filter((element) => {
      return element.id !== id;
    });
    setArrayWithRandom(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}> Add Random Contact </button>
      <button onClick={sortByName}> sort the table by name </button>
      <button onClick={sortByPopularity}> sort the table by popularity </button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        {arrayWithRandom.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>
                  <h2>{contact.name}</h2>
                </td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "💪"}</td>
                <td>{contact.wonEmmy && "💪"}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
