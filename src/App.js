import "./App.css";
import contactsFromJSON from "./contacts.json";
// import { useState } from 'react';

const firstFive = contactsFromJSON.slice(0, 5);
// const [contacts, setContacts] = useState(contactsFromJSON)

function App() {
  return (
    <div className="App">
      {firstFive.map((contactObj) => {
        return (
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            <tr>
              <th>{contactObj.pictureUrl}</th>
              <th>{contactObj.name}</th>
              <th>{contactObj.popularity}</th>
            </tr>
          </table>
        );
      })}
      ;
    </div>
  );
}

export default App;
