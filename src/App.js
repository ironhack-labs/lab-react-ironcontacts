import logo from './logo.svg';
import './App.css';
import contacts from '../src/contacts.json'
import { useState } from "react"


function App() {
  const fiveContacts = contacts.slice(0, 5)

  const [initActors, setInitActors] = useState(fiveContacts)

  const addActor = () => {
    const newActors = [...initActors]
    newActors.push(contacts[9])
    setInitActors(newActors)
  }

  return (
    <div className="App table-artist">
      <table>
        <thead className='head-table'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>WonOscar</th>
            <th>WonEmmy</th>
          </tr>
        </thead>
        <tbody className='body-table'>
          {initActors.map((actor) => <tr key={actor.name}>
            <td><img src={actor.pictureUrl} alt="" /></td>
            <td>{actor.name}</td>
            <td>{actor.popularity}</td>
            {
              actor.wonOscar ? <td>🏆</td> : <td>💩</td>
            }
            {
              actor.wonEmmy ? <td>🏆</td> : <td>💩</td>
            }
          </tr>)}
          {/* <td>{actor.wonOscar ? '🏆' : '💩'}</td> ------------> Segunda forma más elegante!!!!!!
          <td>{actor.wonEmmy ? '🏆' : '💩'}</td> */}
        </tbody>
      </table>
      <button onClick={addActor}>Add Actor</button>
    </div>
  );

}

export default App;

























