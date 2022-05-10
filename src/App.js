import { useState } from "react";
import './App.css';
import contactsArr from "./contacts.json";

function App() {
  const fiveContacts = contactsArr.slice(0, 5);

  const [contacts, setContacts] = useState(fiveContacts)

  const addRandomContact = ()=>{
    setContacts((prevContacts)=>{
      const newContactsList = contactsArr.filter((contact)=> {
        return !prevContacts.includes(contact);
      });
      const getRandomContact = newContactsList[Math.floor(Math.random()* newContactsList.length)];
      const newConctactSelection = [...prevContacts,getRandomContact]
      return newConctactSelection;
    })
  };


  return (
    <div className="App">
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
      </div>
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
          {contacts.map((contact)=>(
            <tr key={contact.id}>
              <td>{<img src={contact.pictureUrl} alt=""></img>}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar === false ? '' :<span>🏆</span>}</td>
              <td>{contact.wonEmmy === false ? '' :<span>🏆</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
