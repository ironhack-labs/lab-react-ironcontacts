import { useEffect } from "react";
import "./App.css";
import contactsData from "./contacts.json";
import {useState} from "react"; 

function App() {

  const [contacts , setContacts] = useState([]); 
  const [remainingContacts, setRemainingContacts] = useState([]); 

  useEffect(() => {
setContacts(contactsData.slice(0,5)); 
setRemainingContacts(contactsData.slice(5)); 

  }, []); 

  const addRandomContact = () => {

    if (remainingContacts.length ===0) return; 
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex]; 
    

    const newRemainingContacts = remainingContacts.filter((_,index) => index !== randomIndex ); 
    setContacts([...contacts, randomContact]);
    setRemainingContacts(newRemainingContacts);
  }; 

  const sortByName = () => {

    const sortedContacts = [...contacts].sort((a,b)=> a.name.localeCompare(b.name)); 
    setContacts(sortedContacts); 
  }; 

  const sortByPopularity = () => {

    const sortedContacts = [...contacts].sort((a,b)=> b.popularity - a.popularity); 
    setContacts(sortedContacts); 
  }; 

  const deleteContact = (id) => {

const updatedContacts = contacts.filter(contact => contact.id !== id); 
setContacts(updatedContacts); 
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thread>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emy</th>
          </tr>
          <tbody>
            {contacts.map((contact, index)=> (
              <tr key={index}>

              <td> 
              <img src={contact.pictureUrl} width="50"></img>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : '' }</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td> <button onClick={() => deleteContact(contact.id)}>Delete Contact</button></td>

              </tr>


            ))}
          </tbody>
        </thread>
      </table>
    </div>
  );
}

export default App;
