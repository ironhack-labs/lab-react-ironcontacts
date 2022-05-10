import { useState } from 'react/cjs/react.production.min';
import './App.css';
import contactsArr from './contacts.json';

function App() {

  const fiveContacts = contactsArr.slice(0, 5)

  // const [contactState, setContact] = useState(fiveContacts);



  return (
    <div className="App">
    <h1>Iron Contacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {fiveContacts.map((elem) => {
          return (
            <tr>
              <th><img src={elem.pictureUrl} /></th>
              <th>{elem.name}</th>
              <th>{elem.popularity}</th>
            </tr>
          )
        })}

      </table>
    </div>
  );
}

export default App;
