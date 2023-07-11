import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = contacts.slice(0, 5);
  const [firstFiveData, setFirstFiveData] = useState(fiveContacts);

  const getRandomContact = (contacts) => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    return setFirstFiveData([...firstFiveData, randomContact]);
  };

  console.log(firstFiveData, "contacts");
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => getRandomContact(contacts)}>
        Add Random Contact
      </button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        {firstFiveData.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img style={{ width: 100 }} src={contact.pictureUrl}></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p> 🏆 </p> : <p> </p>}</td>
                <td>{contact.wonEmmy ? <p> 🏆 </p> : <p> </p>}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
