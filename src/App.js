import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

function App() {
  const [contactArray, setContacts] = useState(contacts.slice(0, 5))

  const addRandomHandler = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    setContacts([...contactArray, contacts[randomIndex]])
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomHandler}>Add Random Contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {contactArray.map((value) => {
          return <tr>
            <td><img src={value.pictureUrl} alt="celeb-prof-pic" /></td>
            <td>{value.name}</td>
            <td>{value.popularity}</td>
            <td>{value.wonOscar ? <p> 🏆 </p> : <p> </p>}</td>
            <td>{value.wonEmmy ? <p> 🏆 </p> : <p> </p>}</td>

          </tr>
        })}
      </table>

    </div>
  );
}

export default App;
