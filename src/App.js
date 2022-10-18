import logo from './logo.svg';
import './App.css';
import contactsFromJSON from "./contacts.json"
import { useState } from 'react'




function App() {

  let firstFive = contactsFromJSON.slice(0, 5)

  const [contacts, setContacts] = useState(firstFive)

  const addRandom = () => {

    const randomContact = contactsFromJSON[Math.floor(Math.random() * contactsFromJSON.length)];

    if (randomContact !== firstFive) {
      firstFive.push(randomContact)
    };
  }
}


console.log(randomContact)



return (


  <div className="App">

    <table>
      <tbody>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        <tr>
          <td> <img src={firstFive[0].picture} alt="picture"></img>  </td>
          <td>{firstFive[0].name}</td>
          <td>{firstFive[0].popularity}</td>
          {firstFive[0].wonOscar ? <td>🏆</td> : <td></td>}
          {firstFive[0].wonEmmy ? <td>🏆</td> : <td></td>}

        </tr>
        <tr>
          <td> <img src={firstFive[1].picture} alt="picture"></img>  </td>
          <td>{firstFive[1].name}</td>
          <td>{firstFive[1].popularity}</td>
          {firstFive[1].wonOscar ? <td>🏆</td> : <td></td>}
          {firstFive[1].wonEmmy ? <td>🏆</td> : <td></td>}
        </tr>
        <tr>
          <td> <img src={firstFive[2].picture} alt="picture"></img>  </td>
          <td>{firstFive[2].name}</td>
          <td>{firstFive[2].popularity}</td>
          {firstFive[2].wonOscar ? <td>🏆</td> : <td></td>}
          {firstFive[2].wonEmmy ? <td>🏆</td> : <td></td>}
        </tr>
        <tr>
          <td> <img src={firstFive[3].picture} alt="picture"></img>  </td>
          <td>{firstFive[3].name}</td>
          <td>{firstFive[3].popularity}</td>
          {firstFive[3].wonOscar ? <td>🏆</td> : <td></td>}
          {firstFive[3].wonEmmy ? <td>🏆</td> : <td></td>}
        </tr>
        <tr>
          <td> <img src={firstFive[4].picture} alt="picture"></img>  </td>
          <td>{firstFive[4].name}</td>
          <td>{firstFive[4].popularity}</td>
          {firstFive[4].wonOscar ? <td>🏆</td> : <td></td>}
          {firstFive[4].wonEmmy ? <td>🏆</td> : <td></td>}
        </tr>
      </tbody>

    </table>


    <button onClick={addRandom}>Random</button>

  </div>
);


export default App;
