import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactList, updateContactList] = useState(contacts.slice(0,5)); 

  

  function addRandomContact(){

    const remainingContacts = contacts.filter(
    (contact) => {
      return contact.id !== newContactList.id
    }
    )
    const randomContact = contacts[Math.floor(Math.random() * remainingContacts.length)];
    // updateContactList(contactList.push(randomContact)) 

    const displayRandomContact =[...contactList,randomContact]
 
    updateContactList(displayRandomContact) 
   
  
  }

  function sortPopularity (){
    const sortedPopContacts = contactList.slice().sort((a,b)=>{
      return b.popularity-a.popularity
    }) 
    updateContactList(sortedPopContacts)
    console.log(contactList)
  }

  function sortName (){
    const sortedNameContacts = contactList.slice().sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    console.log(sortedNameContacts)

    updateContactList(sortedNameContacts)
  }

  function deleteContact(contactId) {
    const deleteContactList = contactList.slice().filter((contact)=>{
      return contact.id !== contactId
    })
    updateContactList(deleteContactList)

  }
  
const newContactList = contactList.map((contact) => {
return(
    <tr>
            <td> 
              <img className='profilePicture' src={contact.pictureUrl} alt= 'profilePicture' /> 
            </td>
            <td> {contact.name}  </td>
            <td> {contact.popularity} </td> 
            <td>{contact.wonOscar ? <span role="img" aria-label="trophy">🏆</span> : null}</td>
            <td>{contact.wonEmmy ? <span role="img" aria-label="trophy">🏆</span> : null}</td>
    
            <td>
            <button onClick={()=>deleteContact(contact.id)}> Delete</button>
            </td>
          </tr>

  )
})


  return (
    <div className="App">
      <h1>Iron Contact</h1>
      <div className="button-container">
      <button onClick={()=>addRandomContact()}> Add Random Contact</button>
      <button onClick={()=>sortPopularity()}> Sort by popularity</button>
      <button onClick={()=>sortName()}> Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th  >Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
{newContactList}
        </tbody>
      </table>
    </div>
  );
}

export default App;
