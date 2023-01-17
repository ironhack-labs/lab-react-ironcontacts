import "./App.css";
import contactsFromJSON from "./contacts.json";
// import { useState } from 'react';

const firstFive = contactsFromJSON.slice(0, 5);
// const [contacts, setContacts] = useState(contactsFromJSON)

function App() {
  return (

    <div className="App">

      <button>Add Random Contact</button>

      {firstFive.map((contactObj) => {
        return (
          <table key={contactObj.id}>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            <tr>
              <td>{contactObj.pictureUrl}</td>
              <td>{contactObj.name}</td>
              <td>{contactObj.popularity}</td>
            </tr>
          </table>
        );
      })}
      ;
    </div>
  );
}

export default App;
