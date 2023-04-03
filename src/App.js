import './App.css';
import {useState} from 'react'
import contacts from './contacts.json'

function App() {

  const [contacts, setContacts] = useState(5)

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
