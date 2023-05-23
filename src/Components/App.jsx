import './App.css';
import contacts from './../contacts.json'
import { useState } from 'react';

function App() {

  const [celebs, setCelebs] = useState(contacts.slice(0, 5))

  const addCeleb = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomCeleb = contacts[randomIndex];
    const celebsCopy = [...celebs]
    celebsCopy.unshift(randomCeleb)
    setCelebs(celebsCopy)
  }

  const callMeByName = () => {
    const nameCopy = [...celebs]
    const nameOrder = nameCopy.sort((a, b) => a.name.localeCompare(b.name))
    setCelebs(nameOrder)
  }
  const callMeByPopularity = () => {
    const popularCopy = [...celebs]
    const popularOrder = popularCopy.sort((a, b) => b.popularity - a.popularity)
    setCelebs(popularOrder)
  }
  const deleteCeleb = idToDelete => {
    const result = celebs.filter(elm => elm.id != idToDelete)
    setCelebs(result)
  }


  return (
    <div className="App">
      <button onClick={addCeleb}> Add Random Contact</button>
      <button onClick={callMeByName}>Sort by Name</button>
      <button onClick={callMeByPopularity}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {
          celebs.map(elm => {
            return (
              <tr>
                <td><img class="tableImg" src={elm.pictureUrl}></img></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td>{elm.wonOscar ? <img class="oscar" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Oscar_statuette.jpg"></img> : <p></p>}</td>
                <td>{elm.wonEmmy ? <img class="emmy" src="https://cdnb.20m.es/sites/76/2016/09/Por-qu%C3%A9-los-premios-Emmy-se-llaman-as%C3%AD.jpg"></img> : <p></p>}</td>
                <button class="deleteButton" onClick={() => deleteCeleb(elm.id)}>Delete</button>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
