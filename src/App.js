import { useState } from "react";
import "./App.css";
import actorsFromJson from "./contacts.json";

const firstFiveActors = actorsFromJson.slice(0, 5);



function App() {

  const [actorsArr, setActorsArr] = useState(firstFiveActors)

  let actorsArrCopy = [...actorsArr]

  const addRandomActor = () => {
    let randomActor = actorsFromJson[Math.floor(Math.random() * actorsFromJson.length)];
    actorsArrCopy.unshift(randomActor);
    setActorsArr(actorsArrCopy);
  }

  const sortByPopularity = () => {
    actorsArrCopy.sort((a, b) => b.popularity-a.popularity)
    setActorsArr(actorsArrCopy)
  }

  const sortByName = () => {
    actorsArrCopy.sort((a, b) => a.name.localeCompare(b.name))
  setActorsArr(actorsArrCopy)
  }

  const deleteActor = (idOfTheActorToDelete) => {
    const newListOfActors = actorsArr.filter((actor) => {
      return actor.id !== idOfTheActorToDelete
    });
    setActorsArr(newListOfActors);
  }
  return (
    <div className="App">

    <button onClick={addRandomActor}>Add actor</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
    <button onClick={sortByName}>Sort by name</button>
    
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {actorsArr.map((actorDetails) => {
            return (
              <tr key={actorDetails.id}>
                <td>
                  <img src={actorDetails.pictureUrl} alt="" height="100px" />
                </td>
                <td>{actorDetails.name}</td>
                <td>{Number(actorDetails.popularity).toFixed(1)}</td>
                <td>{actorDetails.wonOscar && "🏆"}</td>
                <td>{actorDetails.wonEmmy && "⭐"}</td>
                <td><button onClick={() => {deleteActor(actorDetails.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
