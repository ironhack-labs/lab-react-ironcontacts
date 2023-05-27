import "./App.css";
import contacts from "./contacts.json";
import { useEffect, useState } from "react";

function App() {
  const maxCelebrities = 5;
  const arrayInit = Math.floor(Math.random() * (contacts.length - maxCelebrities));

  const [celebrities, setCelebrities] = useState([]);

  useEffect(() => {
    setCelebrities(contacts.slice(arrayInit, arrayInit + maxCelebrities));
  }, []);

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    setCelebrities((prevList) => [...prevList, contacts[randomIndex]]);
  };

  const sortPopularity = () => {
    setCelebrities([...celebrities].sort((a, b) => b.popularity - a.popularity));
  };

  const sortName = () => {
    setCelebrities(
      [...celebrities].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      })
    );
  };

  const deleteCelebrity = (celebrityId) => {
    if (celebrityId) {
      setCelebrities(celebrities.filter((celebrity) => celebrity.id !== celebrityId));
    }
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Celebrity</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {celebrities.map((celebrity) => {
            return (
              <tr key={celebrity.id}>
                <th>
                  <img src={celebrity.pictureUrl} alt="Profile" />
                </th>
                <th>
                  <p>{celebrity.name}</p>
                </th>
                <th>
                  <p>{celebrity.popularity}</p>
                </th>
                <th>{celebrity.wonOscar ? <p>🏆</p> : <p></p>}</th>
                <th>{celebrity.wonEmmy ? <p>🏆</p> : <p></p>}</th>
                <th>
                  <button onClick={(event) => deleteCelebrity(celebrity.id)}>Delete</button>
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
