import "./App.css";
import { useState, useEffect } from "react";
import contacts from "./contacts.json";
//Formatearlos
function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(5);
  const arrAux = [];

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      arrAux.push(contacts[i]);
    }
    setData(arrAux);
  }, []);

  const addRandomContact = () => {
    const copyData = [...data, contacts[index]];
    setIndex((prevStatus) => prevStatus + 1);
    setData(copyData);
  };

  const deleteContact = (id) => {
    const copyData = [...data];
    const fData = copyData.filter((artist) => artist.id !== id);
    setData(fData);
  };

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => {
            const { name, pictureUrl, popularity, id, wonOscar, wonEmmy } =
              artist;
            return (
              <tr>
                <td>
                  <img src={pictureUrl} alt="" />
                </td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td>{wonOscar && <span>🏆</span>}</td>
                <td>{wonEmmy && <span>🏆</span>}</td>
                <td>
                  <button onClick={() => deleteContact(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;