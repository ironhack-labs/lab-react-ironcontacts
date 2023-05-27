import "./App.css";
import contacts from "./contacts.json";
import { useEffect, useState } from "react";

const arrayInit = Math.floor(Math.random() * (contacts.length - 5));

function sortArrayByName(a, b) {}

function sortArrayByPopularity(a, b) {}

function App() {
  const [celebrities, setCelebrities] = useState([]);
  const [maxCelebrities, setMax] = useState(5);

  useEffect(() => {
    setCelebrities(contacts);
  }, []);

  const selectCelebrities = celebrities.slice(arrayInit, arrayInit + maxCelebrities);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => setMax(maxCelebrities + 1)}>Add Random Celebrity</button>
      <button>Sort by popularity</button>
      <button>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {selectCelebrities.map((cel) => {
            return (
              <tr key={cel.id}>
                <th>
                  <img src={cel.pictureUrl} alt="Profile" />
                </th>
                <th>
                  <p>{cel.name}</p>
                </th>
                <th>
                  <p>{cel.popularity}</p>
                </th>
                <th>{cel.wonOscar ? <p>🏆</p> : <p></p>}</th>
                <th>{cel.wonEmmy ? <p>🏆</p> : <p></p>}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
