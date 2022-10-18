import { useState } from "react";
import "./App.css";
import contactsFromJSON from "./contacts.json";

function App() {
  
  const [contacts, setContacts] = useState(contactsFromJSON.slice(0, 5));
  const  newContacts = [...contactsFromJSON];

  
//Add New Random Contacts
  const addRandomContact =()=>{
    setContacts(prevValue => {
      const otherContacts = newContacts.slice(5, newContacts.length-1);
      const randomContact = otherContacts[Math.floor(Math.random()*otherContacts.length)];
      const shallowCopy = [...prevValue]
      shallowCopy.push(randomContact)
      return shallowCopy
    })
  }
  //Sort by name
  const sortByName =() =>{
    setContacts(prevValue => {
      const shallowCopy = [...prevValue]
      shallowCopy.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return shallowCopy
    })
  }
  //sort by popularity
  const sortByPopularity =() =>{
    setContacts(prevValue => {
      const shallowCopy = [...prevValue]
      console.log(shallowCopy.sort())
       shallowCopy.sort(function(a, b) {
        return b.popularity - a.popularity;
      });
       return shallowCopy
    })
  }
  //Remove Contacts
  const  removeContacts = (contactId) =>{
    console.log("Deleting contact.....",contactId)
      setContacts(prevValue => {
      const shallowCopy = [...prevValue]
      return shallowCopy.filter(contactObj => contactObj.id !== contactId);
    })
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      
      <table>
        <thead>
          <tr>
            <th><h1>Picture</h1></th>
            <th><h1>Name</h1></th>
            <th><h1>Popularity</h1></th>
            <th><h1>WonOscar</h1></th>
            <th><h1>WonEmmy</h1></th>
            <th><h1>Actions</h1></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const wonOscar = contact.wonOscar? '🏆': null;
            const wonEmmy =contact.wonEmmy? '🌟': null;
              
            return (
              <tr key ={contact.id} >
                <td><img className = "img-resize" src={contact.pictureUrl} alt="" /></td>
                <td><p>{contact.name}</p></td>
                <td><p>{parseFloat(contact.popularity).toFixed(2)}</p></td>
                <td>{wonOscar}</td>
                <td>{wonEmmy}</td>
                <td><button onClick={()=>{removeContacts(contact.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
