// src/App.js
import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from 'react'

function App() {

  let firstFiveContacts = contactsArr.slice(0,5);

  let randomContacts = Math.floor(Math.random() * otherContacts.length);
  
  const [contacts, setContacts] = useState(firstFiveContacts);

  let otherContacts = contactsArr.filter(eachCeleb => {
    return !contacts.includes(eachCeleb)
  }) ;


  let addRandomContact = ()=> {
  
  }

  return (
    <div className="App">
      <h2> List of Contacts </h2>
      <button >Add Random</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
        </tr>

        {firstFiveContacts.map((element) => {
          return (
            <tr>
              <td><img className="image" src={element.pictureUrl}></img></td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
              {element.wonOscar && <td>🏆</td>}
              {!element.wonOscar && <td></td>}
              {element.wonEmmy && <td>🏆</td>}
              {!element.wonEmmy && <td></td>}
              
              
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
