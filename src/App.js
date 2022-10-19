//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import contacts from './contacts.json'



function App() {
  let newArrInic = contacts.slice(0,5)

  const [newArr,setNewArr] = useState(newArrInic)

  function addRandom(){
    let numRandom = (Math.floor(Math.random() * contacts.length));
    let contactRandom = contacts[numRandom];
    const arrExtra = [...newArr, contactRandom];
    setNewArr(arrExtra);
  }

  const contactInfo = newArrInic.map((contact) => {
    return (

      <tr>
        <td><img src={contact.pictureUrl} width='60px' /></td>
        <td>{contact.name}</td>
        <td>{(contact.popularity).toFixed(2)}</td>
        <td>{contact.wonOscar}</td>
        <td>{contact.wonEmmy}</td>
      </tr>

    )
  })
  return (
    <div className="App">

      <h1>Ironcontacts</h1>
      <div>
        <button onClick={addRandom}>Add Random</button>
      </div>

      <h1>Ironcontacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won An Oscar</th>
            <th>Won An Emmy</th>
          </tr>
        </thead>
        <tbody>{contactInfo}</tbody>
      </table>
    </div>
  )
}

export default App;