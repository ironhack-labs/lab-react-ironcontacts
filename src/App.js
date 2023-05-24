import "./App.css";
import contacts from "./contacts.json";
import { useEffect, useState } from "react";

function App() {
  const arrayInit = Math.floor(Math.random() * (contacts.length - 5));
  const [celebrities, setCelebrities] = useState([]);

  useEffect(() => {
    setCelebrities(contacts);
  }, []);
  const selectCelebrities = celebrities.slice(arrayInit, arrayInit + 5);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {selectCelebrities.map((cel) => {
            return (
              <tr>
                <th>
                  <img src={cel.pictureUrl} alt="Profile" />
                </th>
                <th>
                  <p>{cel.name}</p>
                </th>
                <th>
                  <p>{cel.popularity}</p>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
