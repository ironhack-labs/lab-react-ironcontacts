import React, { useState } from 'react';
import "./App.css";
import contactsJSON from "./contacts.json";
import RandButt from './Components/RandButt';
import PopButt from './Components/PopButt';
import NameButt from './Components/NameButt';
import DelButt from './Components/DelButt';

function App() {
  const firstFive = contactsJSON.slice(0,5)
  let [contacts,setContacts] = useState(firstFive)
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <RandButt method={setContacts} array={contactsJSON} contacts={contacts}/>
      <PopButt contacts={contacts} method={setContacts}/>
      <NameButt contacts={contacts} method={setContacts}/>
      <table className="first-five-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((user, index) => (
            <tr key={index}>
              <td><img src={user.pictureUrl}/></td>
              <td>{user.name}</td>
              <td>{user.popularity}</td>
              <td>{user.wonOscar?"🏆":""}</td>
              <td>{user.wonEmmy?"🌟":""}</td>
              <td><DelButt contacts={contacts} id={user.id} method={setContacts}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
