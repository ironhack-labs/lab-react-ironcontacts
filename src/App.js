// src/App.js
import { useState } from "react";
import "./App.css";
import contactsFromJson from "./contacts.json"



function App() {
  const [contacts, setContacts] = useState(contactsFromJson.slice(0, 5));
  //console.log(contacts)
  
  const addRandomContact = ()=>{
    const randomIndex = Math.floor(Math.random() * contactsFromJson.length)
    //console.log(randomIndex)
    const randomContact = contactsFromJson[randomIndex]
  }
  //push(randomContact)
  //const sortAlphabetically = ()=>{


  const deleteContact = (contactId)=>{
    const newList = contacts.filter((filteredContacts)=>{
      if (filteredContacts.id === contactId){
        return false 
      } else {
        return true
      }
    })
    setContacts(newList)
  }
  

  return (
    <div className="App">
      <button onClick={()=>{addRandomContact()}}> add random contact</button>
      
      <table>
            <tr>
              <th> Picture</th>
              <th> Name</th>
              <th> Popularity</th>
              <th> Won an Oscar </th>
              <th> Won an Emmy </th>
            </tr>
            
            
      {contacts.map((contactObj) => {
        
        return (
          <>
            <tr>
              <td> <img src={contactObj.pictureUrl}/> </td>
              <td> {contactObj.name}</td>
              <td> {contactObj.popularity}</td>
              <td> {contactObj.wonOscar && <p>🏆</p> }</td>
              <td> {contactObj.wonEmmy && <p>🏆</p> }</td>
            </tr>
            <button onClick={()=>{deleteContact(contactObj.id)}}> delete</button>
            </>
        );
      })}
      </table>
      
    </div>
  );
}
export default App;