import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [allContacts, setAllContacts] = useState(contacts.slice(0, 5));
  console.log(allContacts);

  const remainingContacts = contacts.slice(5, contacts.length);

  const addRandomContact = () => {
    const oneRandomIndex = Math.floor(Math.random() * remainingContacts.length);
    const oneRandomCeleb = remainingContacts[oneRandomIndex];
    setAllContacts([
      ...allContacts,
      {
        pictureUrl: oneRandomCeleb.pictureUrl,
        name: oneRandomCeleb.name,
        popularity: oneRandomCeleb.popularity,
        wonOscar: oneRandomCeleb.wonOscar,
        wonEmmy: oneRandomCeleb.wonEmmy,
      },
    ]);
  };

  return (
    <div className="App">
      <ul>
        <h1>IronContacts</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
            {allContacts.map((element) => {
              return (
                <>
                  <tr>
                    <td>
                      {" "}
                      <img src={element.pictureUrl} alt={element.name} />
                    </td>
                    <td>{element.name}</td> <td>{element.popularity}</td>
                    <td> {element.wonOscar ? "🏆" : null} </td>
                    <td> {element.wonEmmy ? "🏆" : null} </td>
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      </ul>
    </div>
  );
}

export default App;
