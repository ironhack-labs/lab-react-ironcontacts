import contactsArr from './contacts.json'
import './App.css';
import { useState } from 'react/cjs/react.production.min';

function App() {

const fiveContacts = contactsArr.slice(0, 5);
console.log(fiveContacts)

  //const [contacts, setContact ] = useState(fiveContacts);

  return (
    <div className="App">
    <h1>IronContacts</h1>
      <table className='contactitos'>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        { fiveContacts.map((elem) => {
          return (
            <tr>
              <td><img src={elem.pictureUrl}/></td>
              <td>{elem.name}</td>
              <td>{elem.popularity}</td>
              <td>{elem.wonOscar ? <span>🏆</span> : ""}</td>
              <td>{elem.wonEmmy ? <span>🏆</span> : ""}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
