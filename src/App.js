import { useState } from 'react/cjs/react.production.min';
import './App.css';
import contactsArr from './contacts.json';

function App() {

  const fiveContacts = contactsArr.slice(0, 5)

  const [contactState, setContact] = useState(fiveContacts);

  const randomContactArr = contactsArr.map(() => {
    
  })

  const randomContact = () => {
    setContact 
  }



  return (
    <div className="App">
    <h1>Iron Contacts</h1>
    <button onClick={randomContact}>Add Random Contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {fiveContacts.map((elem) => {
          return (
            <tr>
              <th><img src={elem.pictureUrl} /></th>
              <th>{elem.name}</th>
              <th>{elem.popularity}</th>
              <th>{elem.wonOscar ? <span>🏆</span> : ""}</th>
              <th>{elem.wonEmmy ? <span>🏆</span> : ""}</th>
            </tr>
          )
        })}

      </table>
    </div>
  );
}

export default App;
