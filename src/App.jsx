import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import { useState } from "react";



function App() {
  let actors = contacts.slice(0, 5)
  console.log(actors)
  let randomNum = (Math.floor(Math.random() * contacts.length))
  const [random, setRandom] = useState(actors)

  const addActor = () => {
    const newActors = [...random];
    newActors.push(contacts[randomNum]);
    setRandom(newActors);
  }

  const deleteActor = (id) => {
    const newActors = random.filter((actor) => actor.id !== id);
    setRandom(newActors);
  }





  return <div className="App">
    <h1>IRON CONTACTS</h1>
    <button onClick={addActor}>Add Random Contact</button>

    <table>
      <thead>
        <tr>
          <th>PICTURE</th>
          <th>NAME</th>
          <th>POPULARITY</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody>
        {random.map(actor => {
          return (
            <tr key={actor.id}>
              <td>
                <img className='pictureActor' src={actor.pictureUrl} alt="MDN" /></td>
              <td>{actor.name}</td>
              <td>{actor.popularity}</td>
              {actor.wonOscar ? <td>🏆</td> : <td>💩</td>}
              {actor.wonEmmy ? <td>🏆</td> : <td>💩</td>}
              <td>
                <button onClick={() => { deleteActor(actor.id) }} >Delete actor</button>
              </td>
            </tr>

          )
        })}
      </tbody>
    </table>


  </div>

}

export default App;
