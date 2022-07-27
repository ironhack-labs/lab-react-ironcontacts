import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json"
const newArr = contacts.slice(0, 5);

function App() {

  // add contact
  const [contact, randomContacts]= useState(newArr);
  function addRandomContact(){ 
    const remainingContacts = contacts.filter((element0) => !contact.includes(element0) )
    if (remainingContacts.length === 0) { return }
    const randomOne = remainingContacts[Math.floor(Math.random()*remainingContacts.length)]
  randomContacts([...contact, randomOne]);
  }

  // sort
  

  return ( 
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>WonOscar</th>
          <th>WonEmmy</th>
        </tr>
        </table>
      {newArr.map((element) => {
        return (
          <table>
        <tr>
          <td>
            {" "}
            <img src={element.pictureUrl} 
            width="80px"
            height="100px"
            />
            
            {" "}
          </td>
          <td>{element.picture}</td>
          <td>{element.name}</td>
          <td>{element.popularity}</td>
          <td>{element.wonOscar}</td>
          <td>{element.wonEmmy}</td>
        </tr>
        </table>
        )
      })}
    </div>
    )
}


export default App;
