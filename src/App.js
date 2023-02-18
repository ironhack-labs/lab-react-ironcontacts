import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactList, updateContactList] = useState(contacts.slice(0,5));
console.log(contactList)
const newContactList = contactList.map((contact) => {
return(
    <tr>
            <td> 
              <img className='profilePicture' src={contact.pictureUrl} alt= 'profilePicture' /> 
            </td>
            <td> {contact.name}  </td>
            <td> {contact.popularity} </td>
            <td>
            <button> Delete</button>
            </td>
          </tr>

  )
})

// updateContactList(newContactList)

function addRandomContact(){

  const remainingContacts = contacts.filter(
  (contact) => {
    return contact.id !== newContactList.id
  }
  )
  const randomContact = contacts[Math.floor(Math.random() * remainingContacts.length)];
  newContactList.push(randomContact)
  
console.log(newContactList)

  // updateContactList(randomContact)

}
  return (
    <div className="App">
      <h1>Iron Contact</h1>
      <button onClick={addRandomContact()}> Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th  >Picture</th>
            <th>Name</th>
            <th>Popularity</th>
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
