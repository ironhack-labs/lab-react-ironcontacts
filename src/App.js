
import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';


function App() {
  const [contactArray, setContacts] = useState(contacts.slice(0, 5))
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {contactArray.map((value) => {
          return <tr>
            <td><img src={value.pictureUrl} alt="celeb-prof-pic" /></td>
            <td>{value.name}</td>
            <td>{value.popularity}</td>
          </tr>
        })}
      </table>

    </div>
  );
}

export default App;
