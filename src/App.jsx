import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"

function App() {
  const [firstFiveContacts, setFirstFiveContacts] = useState(contacts.slice(0,5))
  
  const addRandom = () => {
    const copyArray = [...firstFiveContacts]
    const myRandomContact = Math.floor(Math.random() * contacts.length)
    const selectedRandom = contacts[myRandomContact];
    copyArray.push(selectedRandom)
    setFirstFiveContacts(copyArray)

}

const sortPopularity = () => {
  const sortPopularity = [...firstFiveContacts].sort((a, b) => {b.popularity > a.popularity})
  setFirstFiveContacts(sortPopularity)

}

const sortName = () => {
  const sortName = [...firstFiveContacts].sort((a, b) => a.name.localeCompare(b.name))
  setFirstFiveContacts(sortName)

}

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by Name</button>
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
          {firstFiveContacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {contact.wonOscar === true && <td>🏆</td>}
                {contact.wonEmmy === true && <td>🌟</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default App;
