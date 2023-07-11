import "./App.css";
import Contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = Contacts.slice(0, 5);
  const [firstFiveData, setFirstFiveData] = useState(fiveContacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        {firstFiveData.map((Contact) => {
          return (
            <tbody key={Contact.id}>
              <tr>
                <td>
                  <img style={{ width: 100 }} src={Contact.pictureUrl}></img>
                </td>
                <td>{Contact.name}</td>
                <td>{Contact.popularity.toFixed(2)}</td>
                <td>{Contact.wonOscar ? <p> 🏆 </p> : <p> </p>}</td>
                <td>{Contact.wonEmmy ? <p> 🏆 </p> : <p> </p>}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
