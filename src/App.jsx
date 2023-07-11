import "./App.css";
import Contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = Contacts.slice(0, 5);
  const [firstFiveData, setFirstFiveData] = useState(fiveContacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      {firstFiveData.map((Contact) => {
        return (
          <table>
            <thead>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </thead>
            <tbody key={Contact.id}>
              <tr>
                <th>
                  <img style={{ width: 100 }} src={Contact.pictureUrl}></img>
                </th>
                <th>{Contact.name}</th>
                <th>{Contact.popularity.toFixed(2)}</th>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
