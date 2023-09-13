import React, { useState } from 'react';
import "./App.css";
import "./components/style.css"
import contacts from "./contacts.json";

function App() {
  const actorRating = contacts.splice(0, 5);

  const addContacts = () => {
    const [contactName, setContacts] = useState(contacts)

    const randomContacts = contacts[Math.floor(Math.random() * contacts.length)]
    const contactsDuce = [...contactName]

    contactsDuce.unshift(randomContacts)
    setContacts(contactsDuce)
  };

  return (
    <div className="App">
      <button onClick={() => {addContacts()}}>Add Random Contact</button>
      {/* <button onClick={removeContacts}></button> */}

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>won Oscar</th>
            <th>won Emmy</th>
          </tr>
        </thead>
        <tbody>

          {
            contacts.map(actor => {

              return (
                <tr key={actor._id}>
                  <td><img src={actor.pictureUrl} alt="pic" style={{ width: "100px" }} /></td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                  {actor.wonOscar ? <td> 🏆 </td> : <td></td>}
                  {actor.wonEmmy ? <td> 🏆 </td> : <td></td>}
                </tr>
              )
            })
          }
        </tbody>

      </table>

      <h1>IronContacts</h1>
    </div>
  );
}

export default App;
