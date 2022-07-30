import logo from './logo.svg';
import './App.css';
import contactsData  from "./contacts.json"
import { useState } from 'react';


function App() {

const [contacts,serContacts] = useState(contactsData)

const nameRandom = Math.floor(Math.random()* (contacts[0].name - contacts[50].name) + contacts[0].name)


  return (
    <div className="App">

      <div>
      <div>
        <button>Add Random Contact</button>
      </div>

        <table>
          <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Won Emy</td>
              <td>Won Oscar</td>
              
          </tr>

          <tr>
            <td><img src={contacts[0].pictureUrl} width={100} height={150}></img></td>
            <td>{contacts[0].name}</td>
            <td>{contacts[0].popularity.toFixed(2)}</td>
            {contacts[0].wonEmmy ? <td>🏆</td> : <td> ❌</td>}
            {contacts[0].wonOscar ? <td>🏆</td> : <td> ❌</td>}
          </tr>
          <tr>
            <td><img src={contacts[1].pictureUrl} width={100} height={150}></img></td>
            <td>{contacts[1].name}</td>
            <td>{contacts[1].popularity.toFixed(2)}</td>
            {contacts[1].wonEmmy ? <td>🏆</td> : <td> ❌</td>}
            {contacts[1].wonOscar ? <td>🏆</td> : <td> ❌</td>}
          </tr>
          <tr>
            <td><img src={contacts[2].pictureUrl} width={100} height={150}></img></td>
            <td>{contacts[2].name}</td>
            <td>{contacts[2].popularity.toFixed(2)}</td>
            {contacts[2].wonEmmy ? <td>🏆</td> : <td> ❌</td>}
            {contacts[2].wonOscar ? <td>🏆</td> : <td> ❌</td>}
          </tr>
          <tr>
            <td><img src={contacts[3].pictureUrl} width={100} height={150}></img></td>
            <td>{contacts[3].name}</td>
            <td>{contacts[3].popularity.toFixed(2)}</td>
            {contacts[3].wonEmmy ? <td>🏆</td> : <td> ❌</td>}
            {contacts[3].wonOscar ? <td>🏆</td> : <td> ❌</td>}
          </tr>
          <tr>
            <td><img src={contacts[4].pictureUrl} width={100} height={150}></img></td>
            <td>{contacts[4].name}</td>
            <td>{contacts[4].popularity.toFixed(2)}</td>
            {contacts[4].wonEmmy ? <td>🏆</td> : <td> ❌</td>}
            {contacts[4].wonOscar ? <td>🏆</td> : <td> ❌</td>}
          </tr>
          <tr>
            <td><img src={contacts[5].pictureUrl} width={100} height={150}></img></td>
            <td>{contacts[5].name}</td>
            <td>{contacts[5].popularity.toFixed(2)}</td>
            {contacts[5].wonEmmy ? <td>🏆</td> : <td> ❌</td>}
            {contacts[5].wonOscar ? <td>🏆</td> : <td> ❌</td>}
          </tr>




        </table>
      </div>





     
    </div>
  );
}

export default App;
