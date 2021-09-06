import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

let arrContacts = JSON.parse(JSON.stringify(contacts));
const primeirosCinco = arrContacts.splice(0, 5);

function App() {
  let positionRandom = Math.floor(Math.random() * arrContacts.length) + 1;
  let randomActor = arrContacts[positionRandom];

  const [atual, setAtual] = useState(primeirosCinco);

  const AddRandom = () => {
    setAtual([...atual, randomActor]);
  };

  const sortName = () => {
    let sortedByName = [...atual];
    sortedByName.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setAtual(sortedByName);
  };
  const sortPopularity = () => {
    let sortedByPop = [...atual];
    sortedByPop.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setAtual(sortedByPop);
  };

  const deleteThis = (id) => {
    let deletedList = [...atual];
    let theOne = deletedList.find((x) => x.id === id);

    deletedList.splice(deletedList.indexOf(theOne), 1);

    setAtual(deletedList);
  };

  /* console.log(randomActor)
console.log(primeirosCinco)
console.log(atual) */
  return (
    <div className="App">
      <button onClick={AddRandom}>Add Ranndom Contact</button>
      <button onClick={sortName}>Sorrt by Name</button>
      <button onClick={sortPopularity}>So3rt by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {atual.map((artista) => {
          return (
            <tr key={artista.key}>
              <td>
                <img src={artista.pictureUrl} width="80px" alt={artista.name} />
              </td>
              <td>{artista.name}</td>
              <td>{artista.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => deleteThis(artista.id)}>DELETE!</button>{" "}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
