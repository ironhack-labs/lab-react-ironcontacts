import contacts from "./contacts.json";
import './App.css';
import { useState } from "react";

function App() {
  
const [contactsArr, setContacts] = useState(contacts.slice(0, 5));

let randomIndex = Math.floor(Math.random() * contacts.length)
let newContact = contacts[randomIndex]

function addContact (randomContact) {
 if (contactsArr.indexOf(newContact)=== -1)
  {setContacts([...contactsArr, newContact])}}


function sortByName() {
  const sortedContacts = [...contactsArr].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  setContacts(sortedContacts);
}

function sortByPopularity () {
  const popularitySort = [...contactsArr].sort((a,b) =>{
    if(a.popularity < b.popularity){
      return 1;
    }
    if((a.popularity > b.popularity)){
      return -1;
    }
    return 0;
  });
  setContacts(popularitySort)
}

function deleteContact (id) {
  const deletedContacts = contactsArr.filter((contact)=> contact.id !== id);
  setContacts(deletedContacts)
}



  
  return (
    <div className="App">
     
     <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th> Won an Oscar</th>
            <th> Won an Emmy</th>
          </tr>
        </thead>
    <tbody>
      {contactsArr.map(contact => (
        <tr key = {contact.id}>
          <td>
          <img width = "80px" src = {contact.pictureUrl} alt = "contact-pic"/>
          </td>
          <td> {contact.name}</td>
          <td> {contact.popularity}</td>
          <td>  {contact.wonOscar ?  ("🏆"): "No"}</td>
          <td>  {contact.wonEmmy ?  ("🏆"): "No"}  </td>
          <td> <button onClick = {() => deleteContact(contact.id)}> Delete Contact </button> </td>
        </tr>
        
      ))}
      
    </tbody>
    
    </table>

        <button onClick = {addContact}> Add random contact</button>
        <button onClick = {sortByName}> Sort by Name </button>
        <button onClick = {sortByPopularity}> Sort by popularity </button>

      </div>
  )
}

export default App;
