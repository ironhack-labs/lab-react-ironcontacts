import contactsData from './contacts.json'
import { useState} from 'react'
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
 
  console.log(contacts)
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((actor)=>{
          return(<tr key={actor.id}>
            <td><img src={actor.pictureUrl} alt="" /></td>
            <td>{actor.name}</td>
            <td>{actor.popularity.toFixed(2)}</td>
            {actor.wonOscar ? <td>🏆</td> : <td></td>}
            {actor.wonEmmy ? <td>🌟</td> : <td></td>}
          </tr>)
        })}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
