import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {

  const selectedCelebs = contacts.splice(0, 5)

  const [celebs, setCelbs] = useState(selectedCelebs)

  const addCeleb = () => {
    const newCeleb = contacts[Math.floor(Math.random() * contacts.length)]
    const celebsCopy = [...celebs]
    celebsCopy.push(newCeleb)
    setCelbs(celebsCopy)
  }
  const sortAlphabetically = () => {
    const celebsCopy = [...celebs]
    celebsCopy.sort()
  }

  return (
    <div className="App">

      <button onClick={addCeleb}>Add random Contact</button>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <table >
        <thead>
          <tr>
            <th>Picture</th>
            <th>Nombre</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>

          {
            celebs.map(elm => {
              return (
                <tr>
                  <td><img src={elm.pictureUrl} alt="" style={{ width: '100px' }} /></td>
                  <td>{elm.name}</td>
                  <td>{elm.popularity}</td>
                  <td>{elm.wonOscar ? <p>🏆</p> : <p>jaja no has ganado nada pringao</p>}</td>
                  <td>{elm.wonEmmy ? <p>🏆</p> : <p>jaja no has ganado nada pringao</p>}</td>
                </tr>
              )
            })
          }

        </tbody>

      </table>
    </div>
  )
}
export default App;

