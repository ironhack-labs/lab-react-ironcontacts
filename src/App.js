import "./App.css";
import { useState } from "react";
import contactsData from './contacts.json'

function App() {
const initialcontacts = contactsData.slice(0,5)
const [contacts, setContacts] = useState(initialcontacts)

function addRandomContact(){
const contactsCopy = [...contacts]
const remainingContacts = contactsData.filter((contact)=>
!contactsCopy.find((c)=>c.id===contact.id))
const randomContact = remainingContacts[Math.floor(Math.random()*remainingContacts.length)]
contactsCopy.push(randomContact)
setContacts(contactsCopy)
}
function sortByPopularity(){
  const contactsCopy = [...contacts]
  contactsCopy.sort((a,b)=>b.popularity-a.popularity)
  setContacts(contactsCopy)
}

function sortByName(){
  const contactsCopy = [...contacts]
  contactsCopy.sort((a,b)=>a.name.localeCompare(b.name))
  setContacts(contactsCopy)

}
function removeContact(id){
  const contactsCopy=contacts.filter((oneContact)=>{
    return oneContact.id !== id
  })
  setContacts(contactsCopy)

}

return ( 
  <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addRandomContact} >Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort By Popularity</button>
    <button onClick={sortByName}>Sort By Name</button>
 
    <table>
      <tr>
        <th className="pictureIron">Picture</th>
        <th className="nameIron">Name</th>
        <th className="popularityIron">Popularity</th>
        <th className="oscarIron">Won Oscar</th>
        <th className="emmyIron">Won Emmy</th>
        <th className="actionsIron">Actions</th>
      </tr>
    

    {contacts.map((contact)=>{
      return(
        <tr key={contact.id}>
        <td className="pictureIron" >
          <img src={contact.pictureUrl} className="contact-image"/>
        </td>
        <td className="nameIron" >{contact.name}</td>
        <td className="popularityIron">{contact.popularity.toFixed(2)}</td>
        <td className="oscarIron">{contact.wonOscar ? "🏆" : "" }</td>
        <td className="emmyIron">{contact.wonEmmy ? "🌟" : "" }</td>
        <td className="actionsIron"> <button onClick={()=>removeContact(contact.id)}>Delete</button></td>
        
        </tr>

      )
    })}
    

    </table>

  </div>
)
  
}
export default App;