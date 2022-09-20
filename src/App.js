import { useState } from "react";
import "./App.css";
import array from "../src/contacts.json";

function App() {

  const fiveContacts = array.slice(0, 5)

  const [initActors, setInitActors] = useState(fiveContacts);

  const addActor = () => {
    const newActors = [...initActors];
    newActors.push(array[9]);
    console.log(newActors)
    setInitActors(newActors);
  }


  return (
    <div className="App table-artists">
      <table className="">
        <thead className="head-table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody className="body-table">
          {initActors.map((actor) =>
            <tr key={actor.name}>
              <td>
                <img src={actor.pictureUrl} alt="" />
              </td>
              <td>{actor.name} </td>
              <td>{actor.popularity} </td>
              <td>{actor.wonOscar ? '🏆' : '💀'}</td>
              <td>{actor.wonEmmy ? '🏆' : '👋🏻'}</td>

              {/* 
                {
                actor.wonOscar ? <td>🏆</td> : <td>🤥</td>
              }

 */}
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={addActor} >Add Actor</button>
    </div>);
}
export default App;