// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const showContacts = contacts.slice(0, 5);
  const [contact, setContact] = useState(showContacts);

  function addContact() {
    const randomNumber = Math.floor(Math.random() * contacts.length) + 6; //from 6 to length of array
    console.log(randomNumber);
    const newContacts = [...contact, contacts[randomNumber]];
    setContact(newContacts);
  }
  function sortByName() {

    setContact([...contact].sort((a, b) => a.name.localeCompare(b.name)));
  }
  function sortByPopularity(){
    setContact([...contact].sort((a,b)=>b.popularity-a.popularity))
  }
  function deleteContact (elmId){
    const filteredContacts = contact.filter(elm => {
      return elm.id !== elmId;
    });
 
    setContact(filteredContacts);
  }
  return (
    <div className="App">
      <button onClick={addContact}>Add random contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <h2>IronContacts</h2>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won An Oscar</th>
            <th>Won An Emmy</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((elm) => (
            <tr key={elm.id}>
              <td>
                <img src={elm.pictureUrl} alt="img" />
              </td>
              <td>{elm.name}</td>
              <td>{elm.popularity}</td>
              {elm.wonOscar ? <td>🏆</td> : <td></td>}
              {elm.wonEmmy ? <td>🏆</td> : <td></td>}
              <td><button onClick={()=>deleteContact(elm.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
