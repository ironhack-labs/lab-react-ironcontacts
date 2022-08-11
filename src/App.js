import './App.css';
import React, { useState } from 'react'; 
import contacts from "./contacts.json";

const contactsArr = contacts.slice(0, 5); 

let randomIndex = Math.floor(Math.random() * contacts.length) + 5;
for (let i = 0; i < contacts.length; i++) {
  contactsArr.push(contactsArr[randomIndex]);
}

function App() {

  const [random, setRandom] = useState();

  return (
    <div className="App">
    <h1> IronContacts </h1>
    <button onClick={() => setRandom(random + 1)}>Add Random Contact</button>
    <table className="table-list">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </tr>
      <tr>
        <td><img className="contacts-img" src={contactsArr[0].pictureUrl} alt="img"/></td>
        <td>{contactsArr[0].name}</td>
        <td>{contactsArr[0].popularity.toFixed(2)}</td>
        <td>{contactsArr[0].wonOscar && '🏆'}</td>
        <td>{contactsArr[0].wonEmmy && '🏆'}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[1].pictureUrl}alt="img"/></td>
        <td>{contactsArr[1].name}</td>
        <td>{contactsArr[1].popularity.toFixed(2)}</td>
        <td>{contactsArr[1].wonOscar && '🏆'}</td>
        <td>{contactsArr[1].wonEmmy && '🏆'}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[2].pictureUrl}alt="img"/></td>
        <td>{contactsArr[2].name}</td>
        <td>{contactsArr[2].popularity.toFixed(2)}</td>
        <td>{contactsArr[2].wonOscar && '🏆'}</td>
        <td>{contactsArr[2].wonEmmy && '🏆'}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[3].pictureUrl}alt="img"/></td>
        <td>{contactsArr[3].name}</td>
        <td>{contactsArr[3].popularity.toFixed(2)}</td>
        <td>{contactsArr[3].wonOscar && '🏆'}</td>
        <td>{contactsArr[3].wonEmmy && '🏆'}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[4].pictureUrl}alt="img"/></td>
        <td>{contactsArr[4].name}</td>
        <td>{contactsArr[4].popularity.toFixed(2)}</td>
        <td>{contactsArr[4].wonOscar && '🏆'}</td>
        <td>{contactsArr[4].wonEmmy && '🏆'}</td>
     </tr>

    </table>
 
    </div>
  );
}

export default App;
