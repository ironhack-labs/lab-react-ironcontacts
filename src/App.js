
import "./App.css";
import contacts from "./contacts.json";
 import React, { useState } from 'react'; 

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5))
  const [randomContact, setRandomContact] = useState(contacts.slice(6))


 

  const newContact = () => { 
    const newContact = contacts[Math.floor(Math.random()* contacts.length)] 
    setContactList ([newContact, ...contactList])}

    const sortByName = () => { 
      const sorted = [...contactList].sort((x,y) => x.name.localeCompare(y.name))
      setContactList(sorted)
    }

    const sortButtonPopularity = () => {
      const sorted =[...contactList].sort((x,y) => x.popularity - y.popularity)
      setContactList (sorted)

    }

    const deleteContact =  (elementId) => {
      const filteredContacts = contactList.filter((element) => {
        return element.id !== elementId;
      });

      setContactList(filteredContacts)
  
    }

  return (
    <>
    <h1 >IronContacts</h1>
     <button onClick={() =>  newContact()} >Add Random Contact</button>
     <button onClick= {sortByName}>Sort Contact by Name</button>
     <button onClick= {sortButtonPopularity}>Sort Contact by Popularity</button>
    <table>
    <thead>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won Oscar</th>
    <th>Action</th>

</thead>
<tbody>
    {contactList.map((element) => {
      return(
        <tr>
        <td><img src={element.pictureUrl} alt="moviestar" width={100} /></td> 
        <td>{element.name}</td>
        <td>{(element.popularity).toFixed(2)}</td>
        <td>{element.wonOscar ? <p>🏆</p> : <p></p> }</td>
        <td>{element.wonEmmy ? <p>🌟</p> : <p></p>}</td>
        <td><button onClick={() => deleteContact(element.id)}>Delete</button></td>

          
        </tr>
      )
    })}
    </tbody>
   </table> 
 
   
   </>
    
  )}


export default App;
