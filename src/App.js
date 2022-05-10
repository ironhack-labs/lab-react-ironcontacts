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
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>
          { arrOfFive.map((contact) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{ contact.wonOscar === true ? <span className='trophee'>🏆</span> : ""}</td>
                <td>{contact.wonEmmy === true ? <span className='trophee'>🏆</span> : "" }</td>

              </tr>
            )
          }) }
        </tbody>
      </table>

    </div>
  );
}

export default App;
