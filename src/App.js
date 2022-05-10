import { useState } from 'react';
import './App.css';
import contactsArr from './contacts.json';

function App() {

  const arrOfFive = contactsArr.slice(0, 5).map((elm) => {
    return elm
  })


 const [contacts, setContact] = useState(arrOfFive);














  return (
    <div className="App">
      <h1>IronContacts</h1>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>

        <tbody>
          { arrOfFive.map((contact) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>

              </tr>
            )
          }) }
        </tbody>
      </table>

    </div>
  );
}

export default App;
