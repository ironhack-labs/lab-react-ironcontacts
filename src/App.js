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

  const sortByName = ()=>{
    setContacts((prevContacts)=>{
      let sortedContacts = [...prevContacts.sort((a, b) => a.name.localeCompare(b.name))]
      return sortedContacts
    })
  };

  const sortByPopularity = () =>{
    setContacts((prevContacts)=>{
      let sortedByPopularity = [...prevContacts.sort((a, b) => a.popularity - (b.popularity))]
      return sortedByPopularity.reverse()
    })
  }

  const deleteContact = (contactId) =>{
    setContacts((prevContacts)=>{
      const newContactsList = prevContacts.filter((contact)=> {
        return contact.id !== contactId;
      });
      return newContactsList
    })
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="button">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort Contact by Name</button>
        <button onClick={sortByPopularity}>Sort Contact by Popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <tr key={contact.id}>
              <td>{<img src={contact.pictureUrl} alt=""></img>}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar === false ? '' :<span class="emoji">🏆</span>}</td>
              <td>{contact.wonEmmy === false ? '' :<span class="emoji">🏆</span>}</td>
              <button className="del-but" onClick={()=>deleteContact(contact.id)}><span class="emoji">🗑</span></button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
